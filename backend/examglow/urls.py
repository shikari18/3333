from django.urls import path
from .views import (
    SyllabusProgressListView, SyllabusProgressToggleView,
    QuizSetListView, QuizDetailView, QuizSubmitView,
    FlashcardDeckListView, FlashcardDeckDetailView, FlashcardProgressView, DueFlashcardsView,
    PastPaperAttemptView, PastPaperProxyView, CambridgePapersView,
    StudyGoalListView, StudyGoalDetailView,
    BookmarkView, BookmarkCheckView,
    DashboardView, SyllabusPdfView,
)

urlpatterns = [
    # Dashboard
    path('dashboard/', DashboardView.as_view(), name='examglow-dashboard'),

    # Syllabus
    path('syllabus/progress/', SyllabusProgressListView.as_view(), name='syllabus-progress'),
    path('syllabus/toggle/', SyllabusProgressToggleView.as_view(), name='syllabus-toggle'),
    path('syllabus/pdf/', SyllabusPdfView.as_view(), name='syllabus-pdf'),

    # Quizzes
    path('quizzes/', QuizSetListView.as_view(), name='quiz-list'),
    path('quizzes/<int:pk>/', QuizDetailView.as_view(), name='quiz-detail'),
    path('quizzes/<int:pk>/submit/', QuizSubmitView.as_view(), name='quiz-submit'),

    # Flashcards
    path('flashcards/decks/', FlashcardDeckListView.as_view(), name='flashcard-deck-list'),
    path('flashcards/decks/<int:pk>/', FlashcardDeckDetailView.as_view(), name='flashcard-deck-detail'),
    path('flashcards/decks/<int:pk>/due/', DueFlashcardsView.as_view(), name='flashcard-due'),
    path('flashcards/progress/', FlashcardProgressView.as_view(), name='flashcard-progress'),

    # Past Papers
    path('past-papers/', PastPaperAttemptView.as_view(), name='past-paper-list'),
    path('past-papers/proxy/', PastPaperProxyView.as_view(), name='past-paper-proxy'),
    path('past-papers/cambridge/', CambridgePapersView.as_view(), name='cambridge-papers'),

    # Study Goals
    path('goals/', StudyGoalListView.as_view(), name='study-goal-list'),
    path('goals/<int:pk>/', StudyGoalDetailView.as_view(), name='study-goal-detail'),

    # Bookmarks
    path('bookmarks/', BookmarkView.as_view(), name='bookmark-list'),
    path('bookmarks/check/', BookmarkCheckView.as_view(), name='bookmark-check'),
]
