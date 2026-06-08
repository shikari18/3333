from rest_framework import serializers
from .models import (
    SyllabusProgress, QuizSet, QuizQuestion, QuizAttempt,
    FlashcardDeck, StaticFlashcard, UserFlashcardProgress,
    PastPaperAttempt, StudyGoal, UserBookmark,
)


class SyllabusProgressSerializer(serializers.ModelSerializer):
    class Meta:
        model = SyllabusProgress
        fields = ('subject_id', 'objective_id', 'completed', 'completed_at')
        read_only_fields = ('completed_at',)


class QuizQuestionSerializer(serializers.ModelSerializer):
    quiz_set_id = serializers.IntegerField(source='quiz_set.id', read_only=True)

    class Meta:
        model = QuizQuestion
        fields = (
            'id', 'quiz_set_id', 'question',
            'option_a', 'option_b', 'option_c', 'option_d',
            'correct_answer', 'explanation', 'topic', 'sort_order', 'image_url',
        )


class QuizSetSerializer(serializers.ModelSerializer):
    attempt_count = serializers.IntegerField(read_only=True, default=0)
    best_score = serializers.FloatField(read_only=True, default=None, allow_null=True)

    class Meta:
        model = QuizSet
        fields = (
            'id', 'subject', 'title', 'description',
            'time_limit_seconds', 'image_url', 'course', 'level',
            'attempt_count', 'best_score',
        )


class QuizAttemptSerializer(serializers.ModelSerializer):
    percentage = serializers.IntegerField(read_only=True)

    class Meta:
        model = QuizAttempt
        fields = ('id', 'quiz_set', 'score', 'total', 'percentage', 'time_taken_seconds', 'answers', 'created_at')
        read_only_fields = ('id', 'created_at', 'percentage')


class FlashcardDeckSerializer(serializers.ModelSerializer):
    class Meta:
        model = FlashcardDeck
        fields = ('id', 'subject', 'name', 'description', 'card_count', 'image_url', 'course', 'level')


class StaticFlashcardSerializer(serializers.ModelSerializer):
    deck_id = serializers.IntegerField(source='deck.id', read_only=True)
    # Per-user progress fields (injected in the view via annotate or get_extra_fields)
    status = serializers.CharField(read_only=True, default='new')
    times_correct = serializers.IntegerField(read_only=True, default=0)
    times_seen = serializers.IntegerField(read_only=True, default=0)

    class Meta:
        model = StaticFlashcard
        fields = ('id', 'deck_id', 'front', 'back', 'topic', 'image_url', 'status', 'times_correct', 'times_seen')


class PastPaperAttemptSerializer(serializers.ModelSerializer):
    class Meta:
        model = PastPaperAttempt
        fields = ('id', 'paper_code', 'paper_type', 'subject', 'session', 'year', 'attempted_at')
        read_only_fields = ('id', 'attempted_at')


class StudyGoalSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudyGoal
        fields = ('id', 'title', 'completed', 'created_at')
        read_only_fields = ('id', 'created_at')


class UserBookmarkSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserBookmark
        fields = ('id', 'resource_type', 'title', 'subject', 'url', 'created_at')
        read_only_fields = ('id', 'created_at')
