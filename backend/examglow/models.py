"""
ExamGlow-specific models that extend paw-pal's backend with the features
from yuna's SQLite schema: syllabus progress, pre-seeded quiz sets,
past paper tracking, flashcard decks, and user study goals.
"""
from django.db import models
from django.conf import settings


# ─── Syllabus Progress ────────────────────────────────────────────────────────

class SyllabusProgress(models.Model):
    """
    Tracks per-user completion of syllabus objectives.
    subject_id and objective_id are identifiers from the frontend syllabus data.
    """
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='syllabus_progress',
        db_index=True,
    )
    subject_id = models.CharField(max_length=100)
    objective_id = models.CharField(max_length=200)
    completed = models.BooleanField(default=False)
    completed_at = models.DateTimeField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('user', 'subject_id', 'objective_id')
        ordering = ['subject_id', 'objective_id']

    def __str__(self):
        return f"{self.user.email} — {self.subject_id}/{self.objective_id}"


# ─── Pre-seeded Quiz Sets (IGCSE style) ───────────────────────────────────────

class QuizSet(models.Model):
    """
    A named quiz set (e.g. "Biology Chapter 1"). Has a collection of questions.
    Pre-seeded by admin / fixtures; users cannot create these directly.
    """
    subject = models.CharField(max_length=100, db_index=True)
    title = models.CharField(max_length=300)
    description = models.TextField(blank=True)
    time_limit_seconds = models.IntegerField(default=300)
    image_url = models.URLField(blank=True)
    course = models.CharField(max_length=100, default='Cambridge IGCSE')
    level = models.CharField(max_length=50, default='IGCSE')
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['subject', 'title']

    def __str__(self):
        return f"[{self.subject}] {self.title}"


class QuizQuestion(models.Model):
    """Normalized MCQ question row, one per question in a QuizSet."""
    quiz_set = models.ForeignKey(QuizSet, on_delete=models.CASCADE, related_name='questions')
    question = models.TextField()
    option_a = models.TextField()
    option_b = models.TextField()
    option_c = models.TextField()
    option_d = models.TextField()
    correct_answer = models.CharField(max_length=1)  # 'A', 'B', 'C', or 'D'
    explanation = models.TextField(blank=True)
    topic = models.CharField(max_length=200, blank=True)
    sort_order = models.IntegerField(default=0)
    image_url = models.URLField(blank=True)

    class Meta:
        ordering = ['sort_order']

    def __str__(self):
        return f"Q{self.sort_order}: {self.question[:60]}"


class QuizAttempt(models.Model):
    """Records a user's attempt at a QuizSet."""
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='quiz_attempts',
        db_index=True,
    )
    quiz_set = models.ForeignKey(QuizSet, on_delete=models.CASCADE, related_name='attempts')
    score = models.IntegerField()
    total = models.IntegerField()
    time_taken_seconds = models.IntegerField(null=True, blank=True)
    answers = models.JSONField(default=dict, blank=True)  # {question_id: 'A'|'B'|...}
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.user.email} — {self.quiz_set.title} ({self.score}/{self.total})"

    @property
    def percentage(self):
        if not self.total:
            return 0
        return round(self.score / self.total * 100)


# ─── Pre-seeded Flashcard Decks ───────────────────────────────────────────────

class FlashcardDeck(models.Model):
    """
    Pre-seeded flashcard deck (subject/topic).
    Distinct from paw-pal's user-owned Deck model — these are curated content.
    """
    subject = models.CharField(max_length=100, db_index=True)
    name = models.CharField(max_length=300)
    description = models.TextField(blank=True)
    card_count = models.IntegerField(default=0)
    image_url = models.URLField(blank=True)
    course = models.CharField(max_length=100, default='Cambridge IGCSE')
    level = models.CharField(max_length=50, default='IGCSE')
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['subject', 'name']

    def __str__(self):
        return f"[{self.subject}] {self.name}"


class StaticFlashcard(models.Model):
    """A single flashcard belonging to a pre-seeded FlashcardDeck."""
    deck = models.ForeignKey(FlashcardDeck, on_delete=models.CASCADE, related_name='cards')
    front = models.TextField()
    back = models.TextField()
    topic = models.CharField(max_length=200, blank=True)
    image_url = models.URLField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['created_at']

    def __str__(self):
        return f"{self.deck.name}: {self.front[:60]}"


class UserFlashcardProgress(models.Model):
    """SM-2 spaced repetition progress per user per static flashcard."""
    STATUS_CHOICES = [('new', 'New'), ('learning', 'Learning'), ('known', 'Known')]

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='static_flashcard_progress',
        db_index=True,
    )
    flashcard = models.ForeignKey(StaticFlashcard, on_delete=models.CASCADE)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='new')
    times_seen = models.IntegerField(default=0)
    times_correct = models.IntegerField(default=0)
    last_seen = models.DateTimeField(auto_now=True)
    # SM-2 fields
    interval_days = models.IntegerField(default=1)
    ease_factor = models.FloatField(default=2.5)
    due_date = models.DateField(auto_now_add=True)

    class Meta:
        unique_together = ('user', 'flashcard')

    def update_sm2(self, quality: int):
        """SM-2 algorithm. quality: 0-5."""
        from datetime import timedelta
        from django.utils import timezone

        ef = self.ease_factor
        ef = max(1.3, ef + 0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))

        if quality < 3:
            self.interval_days = 1
        elif self.times_seen <= 1:
            self.interval_days = 1
        elif self.times_seen == 2:
            self.interval_days = 6
        else:
            self.interval_days = round(self.interval_days * ef)

        self.ease_factor = ef
        self.due_date = (timezone.now() + timedelta(days=self.interval_days)).date()
        self.save()


# ─── Past Papers ─────────────────────────────────────────────────────────────

class PastPaperAttempt(models.Model):
    """Tracks which past papers a user has attempted."""
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='past_paper_attempts',
        db_index=True,
    )
    paper_code = models.CharField(max_length=100)
    paper_type = models.CharField(max_length=50)
    subject = models.CharField(max_length=100)
    session = models.CharField(max_length=50)   # e.g. 'May/June'
    year = models.CharField(max_length=10)
    attempted_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-attempted_at']

    def __str__(self):
        return f"{self.user.email} — {self.subject} {self.paper_code} {self.year}"


# ─── User Study Goals ─────────────────────────────────────────────────────────

class StudyGoal(models.Model):
    """Simple to-do style study goals on the user's dashboard."""
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='study_goals',
        db_index=True,
    )
    title = models.CharField(max_length=300)
    completed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['created_at']

    def __str__(self):
        return f"{self.user.email}: {self.title}"


# ─── User Bookmarks ───────────────────────────────────────────────────────────

class UserBookmark(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='examglow_bookmarks',
        db_index=True,
    )
    resource_type = models.CharField(max_length=50)  # 'quiz', 'flashcard', 'paper', etc.
    title = models.CharField(max_length=300)
    subject = models.CharField(max_length=100, blank=True)
    url = models.CharField(max_length=500, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']
        unique_together = ('user', 'resource_type', 'title')

    def __str__(self):
        return f"{self.user.email} ★ {self.title}"
