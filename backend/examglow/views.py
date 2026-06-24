"""
ExamGlow API views — syllabus, quizzes, flashcards, past papers, goals, bookmarks.
These mirror the createServerFn handlers in yuna's src/api/*.ts files.
"""
import re
import requests
from django.db.models import Count, Max, Avg, ExpressionWrapper, FloatField, F, Q
from django.utils import timezone
from django.http import StreamingHttpResponse
from django.views.decorators.clickjacking import xframe_options_exempt
from django.utils.decorators import method_decorator
from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import (
    SyllabusProgress, QuizSet, QuizQuestion, QuizAttempt,
    FlashcardDeck, StaticFlashcard, UserFlashcardProgress,
    PastPaperAttempt, StudyGoal, UserBookmark,
)
from .serializers import (
    SyllabusProgressSerializer, QuizSetSerializer, QuizQuestionSerializer,
    QuizAttemptSerializer, FlashcardDeckSerializer, StaticFlashcardSerializer,
    PastPaperAttemptSerializer, StudyGoalSerializer, UserBookmarkSerializer,
)


# ─── Syllabus ─────────────────────────────────────────────────────────────────

class SyllabusProgressListView(APIView):
    """
    GET  /api/examglow/syllabus/progress/  → all user's progress rows
    POST /api/examglow/syllabus/progress/  → bulk upsert
    """
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        qs = SyllabusProgress.objects.filter(user=request.user)
        return Response(SyllabusProgressSerializer(qs, many=True).data)

    def post(self, request):
        """Bulk upsert: [{ subjectId, objectiveId, completed }]"""
        items = request.data if isinstance(request.data, list) else request.data.get('progress', [])
        for item in items:
            SyllabusProgress.objects.update_or_create(
                user=request.user,
                subject_id=item['subjectId'],
                objective_id=item['objectiveId'],
                defaults={
                    'completed': item.get('completed', False),
                    'completed_at': timezone.now() if item.get('completed') else None,
                }
            )
        return Response({'updated': len(items)})


class SyllabusProgressToggleView(APIView):
    """
    POST /api/examglow/syllabus/toggle/
    Body: { subjectId, objectiveId, completed }
    """
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        subject_id = request.data.get('subjectId')
        objective_id = request.data.get('objectiveId')
        completed = bool(request.data.get('completed', False))

        if not subject_id or not objective_id:
            return Response({'error': 'subjectId and objectiveId required'}, status=400)

        obj, _ = SyllabusProgress.objects.update_or_create(
            user=request.user,
            subject_id=subject_id,
            objective_id=objective_id,
            defaults={
                'completed': completed,
                'completed_at': timezone.now() if completed else None,
            }
        )
        return Response(SyllabusProgressSerializer(obj).data)


# ─── Quizzes ──────────────────────────────────────────────────────────────────

class QuizSetListView(generics.ListAPIView):
    """
    GET /api/examglow/quizzes/
    Returns all quiz sets with the current user's attempt_count and best_score annotated.
    """
    serializer_class = QuizSetSerializer
    permission_classes = [permissions.IsAuthenticated]
    pagination_class = None  # Return plain array — these lists are always small

    def get_queryset(self):
        user = self.request.user
        return (
            QuizSet.objects
            .annotate(
                attempt_count=Count('attempts', filter=Q(attempts__user=user)),
                best_score=Max(
                    ExpressionWrapper(
                        F('attempts__score') * 100.0 / F('attempts__total'),
                        output_field=FloatField()
                    ),
                    filter=Q(attempts__user=user),
                )
            )
            .order_by('subject', 'title')
        )


class QuizDetailView(APIView):
    """
    GET /api/examglow/quizzes/<pk>/
    Returns the quiz set + all questions.
    """
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, pk):
        try:
            quiz = QuizSet.objects.get(pk=pk)
        except QuizSet.DoesNotExist:
            return Response({'error': 'Quiz not found'}, status=404)

        questions = quiz.questions.all().order_by('sort_order')
        return Response({
            'quiz': QuizSetSerializer(quiz).data,
            'questions': QuizQuestionSerializer(questions, many=True).data,
        })


class QuizSubmitView(APIView):
    """
    POST /api/examglow/quizzes/<pk>/submit/
    Body: { answers: { questionId: 'A'|'B'|'C'|'D' }, time_taken_seconds }
    Returns: { score, total, pct, graded: { id: { correct, correctAnswer } } }
    """
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, pk):
        try:
            quiz = QuizSet.objects.get(pk=pk)
        except QuizSet.DoesNotExist:
            return Response({'error': 'Quiz not found'}, status=404)

        answers = request.data.get('answers', {})
        time_taken = request.data.get('time_taken_seconds', 0)

        questions = list(quiz.questions.all())
        score = 0
        graded = {}

        for q in questions:
            user_answer = answers.get(str(q.id), '').upper()
            correct = user_answer == q.correct_answer.upper()
            if correct:
                score += 1
            graded[str(q.id)] = {
                'correct': correct,
                'correctAnswer': q.correct_answer,
            }

        total = len(questions)
        pct = round(score / total * 100) if total else 0

        QuizAttempt.objects.create(
            user=request.user,
            quiz_set=quiz,
            score=score,
            total=total,
            time_taken_seconds=time_taken,
            answers=answers,
        )

        # Log study activity (streak update)
        try:
            request.user.log_study_time(minutes=max(1, time_taken / 60))
        except Exception:
            pass

        return Response({'score': score, 'total': total, 'pct': pct, 'graded': graded})


# ─── Flashcard Decks ──────────────────────────────────────────────────────────

class FlashcardDeckListView(generics.ListAPIView):
    """GET /api/examglow/flashcards/decks/"""
    serializer_class = FlashcardDeckSerializer
    permission_classes = [permissions.IsAuthenticated]
    pagination_class = None  # Return plain array

    def get_queryset(self):
        user = self.request.user
        course = getattr(user, 'course', 'Cambridge IGCSE') or 'Cambridge IGCSE'
        from django.db.models import Case, IntegerField, Value, When
        return FlashcardDeck.objects.annotate(
            priority=Case(
                When(course=course, then=Value(0)),
                default=Value(1),
                output_field=IntegerField(),
            )
        ).order_by('priority', 'subject', 'name')


class FlashcardDeckDetailView(APIView):
    """GET /api/examglow/flashcards/decks/<pk>/"""
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, pk):
        try:
            deck = FlashcardDeck.objects.get(pk=pk)
        except FlashcardDeck.DoesNotExist:
            return Response({'error': 'Deck not found'}, status=404)

        cards = StaticFlashcard.objects.filter(deck=deck)
        user = request.user

        # Fetch progress for this user in one query
        progress_map = {
            p.flashcard_id: p
            for p in UserFlashcardProgress.objects.filter(user=user, flashcard__deck=deck)
        }

        card_data = []
        for card in cards:
            prog = progress_map.get(card.id)
            card_data.append({
                'id': card.id,
                'deck_id': deck.id,
                'front': card.front,
                'back': card.back,
                'topic': card.topic,
                'image_url': card.image_url,
                'status': prog.status if prog else 'new',
                'times_correct': prog.times_correct if prog else 0,
                'times_seen': prog.times_seen if prog else 0,
            })

        mastered = sum(1 for c in card_data if c['status'] == 'known')
        return Response({
            'deck': FlashcardDeckSerializer(deck).data,
            'cards': card_data,
            'masteredCount': mastered,
            'totalCount': len(card_data),
        })


class FlashcardProgressView(APIView):
    """
    POST /api/examglow/flashcards/progress/
    Body: { flashcard_id, known: bool, quality: 0-5 }
    """
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        flashcard_id = request.data.get('flashcard_id')
        known = bool(request.data.get('known', False))
        quality = int(request.data.get('quality', 4 if known else 1))

        try:
            flashcard = StaticFlashcard.objects.get(pk=flashcard_id)
        except StaticFlashcard.DoesNotExist:
            return Response({'error': 'Flashcard not found'}, status=404)

        prog, created = UserFlashcardProgress.objects.get_or_create(
            user=request.user,
            flashcard=flashcard,
        )
        prog.times_seen += 1
        if known:
            prog.times_correct += 1
        prog.status = 'known' if known else 'learning'
        prog.update_sm2(quality)
        prog.save()

        return Response({'success': True})


class DueFlashcardsView(APIView):
    """GET /api/examglow/flashcards/decks/<pk>/due/"""
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, pk):
        try:
            deck = FlashcardDeck.objects.get(pk=pk)
        except FlashcardDeck.DoesNotExist:
            return Response({'error': 'Deck not found'}, status=404)

        today = timezone.now().date()
        cards = StaticFlashcard.objects.filter(deck=deck)
        progress_map = {
            p.flashcard_id: p
            for p in UserFlashcardProgress.objects.filter(user=request.user, flashcard__deck=deck)
        }

        due_cards = []
        for card in cards:
            prog = progress_map.get(card.id)
            if prog is None or prog.due_date <= today:
                due_cards.append({
                    'id': card.id,
                    'deck_id': deck.id,
                    'front': card.front,
                    'back': card.back,
                    'topic': card.topic,
                    'image_url': card.image_url,
                    'status': prog.status if prog else 'new',
                    'times_correct': prog.times_correct if prog else 0,
                    'times_seen': prog.times_seen if prog else 0,
                    'due_date': str(prog.due_date) if prog else str(today),
                    'interval_days': prog.interval_days if prog else 1,
                })

        return Response({'cards': due_cards, 'dueCount': len(due_cards)})


# ─── Past Papers ─────────────────────────────────────────────────────────────

class PastPaperAttemptView(APIView):
    """
    GET  /api/examglow/past-papers/  → list user's attempts
    POST /api/examglow/past-papers/  → record a new attempt
    """
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        qs = PastPaperAttempt.objects.filter(user=request.user)
        return Response(PastPaperAttemptSerializer(qs, many=True).data)

    def post(self, request):
        serializer = PastPaperAttemptSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(user=request.user)
        return Response(serializer.data, status=201)


# ─── Study Goals ──────────────────────────────────────────────────────────────

class StudyGoalListView(APIView):
    """GET/POST /api/examglow/goals/"""
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        goals = StudyGoal.objects.filter(user=request.user)
        return Response(StudyGoalSerializer(goals, many=True).data)

    def post(self, request):
        title = request.data.get('title', '').strip()
        if not title:
            return Response({'error': 'title required'}, status=400)
        goal = StudyGoal.objects.create(user=request.user, title=title)
        return Response(StudyGoalSerializer(goal).data, status=201)


class StudyGoalDetailView(APIView):
    """PATCH/DELETE /api/examglow/goals/<pk>/"""
    permission_classes = [permissions.IsAuthenticated]

    def _get(self, request, pk):
        try:
            return StudyGoal.objects.get(pk=pk, user=request.user)
        except StudyGoal.DoesNotExist:
            return None

    def patch(self, request, pk):
        goal = self._get(request, pk)
        if not goal:
            return Response({'error': 'Not found'}, status=404)
        goal.completed = bool(request.data.get('completed', goal.completed))
        goal.save(update_fields=['completed'])
        return Response(StudyGoalSerializer(goal).data)

    def delete(self, request, pk):
        goal = self._get(request, pk)
        if not goal:
            return Response({'error': 'Not found'}, status=404)
        goal.delete()
        return Response(status=204)


# ─── Bookmarks ────────────────────────────────────────────────────────────────

class BookmarkView(APIView):
    """
    GET  /api/examglow/bookmarks/  → list
    POST /api/examglow/bookmarks/  → toggle (add if missing, remove if present)
    """
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        qs = UserBookmark.objects.filter(user=request.user)
        return Response(UserBookmarkSerializer(qs, many=True).data)

    def post(self, request):
        resource_type = request.data.get('resourceType', '')
        title = request.data.get('title', '')
        if not resource_type or not title:
            return Response({'error': 'resourceType and title required'}, status=400)

        existing = UserBookmark.objects.filter(
            user=request.user, resource_type=resource_type, title=title
        ).first()

        if existing:
            existing.delete()
            return Response({'bookmarked': False})

        UserBookmark.objects.create(
            user=request.user,
            resource_type=resource_type,
            title=title,
            subject=request.data.get('subject', ''),
            url=request.data.get('url', ''),
        )
        return Response({'bookmarked': True}, status=201)


class BookmarkCheckView(APIView):
    """GET /api/examglow/bookmarks/check/?resourceType=&title="""
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        resource_type = request.query_params.get('resourceType', '')
        title = request.query_params.get('title', '')
        exists = UserBookmark.objects.filter(
            user=request.user, resource_type=resource_type, title=title
        ).exists()
        return Response({'bookmarked': exists})


# ─── Dashboard ────────────────────────────────────────────────────────────────

class DashboardView(APIView):
    """
    GET /api/examglow/dashboard/
    Aggregates all the data yuna's getDashboardDataFn returns.
    """
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        user = request.user
        user.validate_streak()

        goals = StudyGoal.objects.filter(user=user).order_by('created_at')
        bookmarks = UserBookmark.objects.filter(user=user).order_by('-created_at')[:8]
        quiz_stats = QuizAttempt.objects.filter(user=user).aggregate(
            total_attempts=Count('id'),
            avg_score=Avg(
                ExpressionWrapper(
                    F('score') * 100.0 / F('total'),
                    output_field=FloatField()
                )
            )
        )

        from users.serializers import UserSerializer
        avg_score = round(quiz_stats['avg_score']) if quiz_stats['avg_score'] is not None else None

        # Build recent activity from quiz attempts and bookmarks
        recent_quizzes = QuizAttempt.objects.filter(user=user).select_related('quiz_set').order_by('-created_at')[:5]
        activity = []
        for attempt in recent_quizzes:
            activity.append({
                'activity_type': 'Quiz',
                'title': f"{attempt.quiz_set.subject}: {attempt.quiz_set.title}",
                'score_text': f"{attempt.percentage}%",
                'created_at': attempt.created_at.isoformat(),
            })

        return Response({
            'user': UserSerializer(user, context={'request': request}).data,
            'streak': user.study_streak,
            'longest_streak': user.longest_streak,
            'goals': StudyGoalSerializer(goals, many=True).data,
            'bookmarks': UserBookmarkSerializer(bookmarks, many=True).data,
            'avgScore': avg_score,
            'totalAttempts': quiz_stats['total_attempts'] or 0,
            'activity': activity,
        })


class CambridgePapersView(APIView):
    """
    Scrapes the Cambridge International official page for a given IGCSE subject
    and returns real, proxiable PDF links for question papers and mark schemes.
    Results are cached in-memory per subject to avoid repeated requests.
    """
    permission_classes = [permissions.AllowAny]
    authentication_classes = []

    SESSION_MONTHS = {
        'May/June': 'june',
        'Oct/Nov': 'november',
        'Feb/Mar': 'march',
    }

    # Known Cambridge URL slugs (subject name segment only, code appended automatically)
    SUBJECT_SLUGS = {
        '0580': 'mathematics',
        '0607': 'mathematics-international',
        '0610': 'biology',
        '0620': 'chemistry',
        '0625': 'physics',
        '0452': 'accounting',
        '0450': 'business-studies',
        '0455': 'economics',
        '0478': 'computer-science',
        '0460': 'geography',
        '0470': 'history',
        '0500': 'english-language',
        '0522': 'english-literature',
        '0495': 'sociology',
        '0417': 'information-and-communication-technology',
        '0411': 'art-and-design',
    }

    XTREME_FOLDERS = {
        '0580': 'Mathematics (0580)',
        '0610': 'Biology (0610)',
        '0620': 'Chemistry (0620)',
        '0625': 'Physics (0625)',
        '0452': 'Accounting (0452)',
        '0478': 'Computer Science (0478)',
        '0455': 'Economics (0455)',
        '0450': 'Business Studies (0450)',
        '0460': 'Geography (0460)',
        '0470': 'History (0470)',
        '0500': 'English - First Language (0500)',
    }

    _page_cache: dict = {}

    def _get_cambridge_pdfs(self, code: str, name: str):
        if code in self._page_cache:
            return self._page_cache[code]

        slug_name = self.SUBJECT_SLUGS.get(code)
        if not slug_name:
            slug_name = name.lower().strip().replace(' ', '-')

        cambridge_url = (
            f'https://www.cambridgeinternational.org/programmes-and-qualifications/'
            f'cambridge-igcse-{slug_name}-{code}/past-papers/'
        )

        try:
            h = {
                'User-Agent': (
                    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) '
                    'AppleWebKit/537.36 (KHTML, like Gecko) '
                    'Chrome/124.0.0.0 Safari/537.36'
                )
            }
            r = requests.get(cambridge_url, headers=h, timeout=15)
            if r.status_code != 200:
                result = ([], cambridge_url)
                self._page_cache[code] = result
                return result

            hrefs = re.findall(r'href="([^"]*\.pdf)"', r.text, re.IGNORECASE)
            pdf_links = []
            for href in hrefs:
                full = (
                    href if href.startswith('http')
                    else f'https://www.cambridgeinternational.org{href}'
                )
                pdf_links.append(full)

            result = (pdf_links, cambridge_url)
            self._page_cache[code] = result
            return result
        except Exception:
            result = ([], cambridge_url)
            self._page_cache[code] = result
            return result

    def get(self, request):
        code = request.query_params.get('code', '').strip()
        name = request.query_params.get('name', '').strip()
        folder_param = request.query_params.get('folder', '').strip()
        year = request.query_params.get('year', '').strip()
        session = request.query_params.get('session', '').strip()
        paper_num = request.query_params.get('paper', '').strip()
        variant = request.query_params.get('variant', '1').strip()

        if not code:
            return Response({'error': 'code is required'}, status=status.HTTP_400_BAD_REQUEST)

        pdf_links, cambridge_url = self._get_cambridge_pdfs(code, name)

        # If no filters, return everything we found
        if not year:
            return Response({'pdfs': pdf_links, 'cambridge_url': cambridge_url})

        month = self.SESSION_MONTHS.get(session, 'june')
        paper_variant = f'{paper_num}{variant}'  # e.g. "11", "21", "31"

        qp_url = None
        ms_url = None

        for url in pdf_links:
            fn = url.split('/')[-1].lower()
            # Must contain the year and the session month
            if year not in fn:
                continue
            if month not in fn:
                continue
            # Must match paper number + variant (e.g. "paper-11" or filename ending "-11.pdf")
            if f'paper-{paper_variant}' not in fn and not fn.endswith(f'-{paper_variant}.pdf'):
                continue

            if 'question-paper' in fn:
                qp_url = url
            elif 'mark-scheme' in fn:
                ms_url = url

        # Fallback to XtremePapers if Cambridge official site is missing the papers
        if not qp_url or not ms_url:
            s_char = 's' if session == 'May/June' else 'w' if session == 'Oct/Nov' else 'm'
            yy = year[-2:]
            fn_qp = f"{code}_{s_char}{yy}_qp_{paper_num}{variant}.pdf"
            fn_ms = f"{code}_{s_char}{yy}_ms_{paper_num}{variant}.pdf"

            folder = folder_param
            if not folder:
                folder = self.XTREME_FOLDERS.get(code)
                if not folder:
                    folder = f"{name} ({code})"

            import urllib.parse
            folder_encoded = urllib.parse.quote(folder)

            headers = {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            }

            if not qp_url:
                test_url = f"https://papers.xtremepape.rs/CAIE/IGCSE/{folder_encoded}/{fn_qp}"
                try:
                    r = requests.head(test_url, headers=headers, timeout=5)
                    if r.status_code == 200:
                        qp_url = test_url
                except Exception:
                    pass

            if not ms_url:
                test_url = f"https://papers.xtremepape.rs/CAIE/IGCSE/{folder_encoded}/{fn_ms}"
                try:
                    r = requests.head(test_url, headers=headers, timeout=5)
                    if r.status_code == 200:
                        ms_url = test_url
                except Exception:
                    pass

        return Response({
            'qp': qp_url,
            'ms': ms_url,
            'cambridge_url': cambridge_url,
            'found': bool(qp_url or ms_url),
        })


@method_decorator(xframe_options_exempt, name='dispatch')
class PastPaperProxyView(APIView):
    """
    Proxy PDF requests from external hosts like PapaCambridge to bypass referrer block.
    """
    permission_classes = [permissions.AllowAny]
    authentication_classes = []

    def get(self, request):
        target_url = request.query_params.get('url')
        if not target_url:
            return Response({'error': 'url query parameter is required'}, status=status.HTTP_400_BAD_REQUEST)

        # Allow PDF URLs or PapaCambridge past papers URLs
        if not (target_url.startswith('https://pastpapers.papacambridge.com/') or 
                target_url.startswith('https://www.cambridgeinternational.org/') or 
                target_url.startswith('https://papers.xtremepape.rs/') or 
                target_url.lower().endswith('.pdf')):
            return Response({'error': 'Invalid target URL.'}, status=status.HTTP_400_BAD_REQUEST)

        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        }

        try:
            response = requests.get(target_url, headers=headers, stream=True, timeout=20)
            if response.status_code != 200:
                return Response(
                    {'error': f'Failed to fetch PDF from mirror: HTTP {response.status_code}'},
                    status=response.status_code
                )

            proxy_response = StreamingHttpResponse(
                response.iter_content(chunk_size=8192),
                content_type='application/pdf'
            )
            proxy_response['Content-Disposition'] = 'inline; filename="paper.pdf"'

            if 'Content-Length' in response.headers:
                proxy_response['Content-Length'] = response.headers['Content-Length']

            return proxy_response
        except requests.RequestException as e:
            return Response({'error': f'Proxy request failed: {str(e)}'}, status=status.HTTP_502_BAD_GATEWAY)
