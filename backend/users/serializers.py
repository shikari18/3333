from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password

User = get_user_model()


class RegisterSerializer(serializers.ModelSerializer):
    """
    Registration serializer.
    Accepts `name` (single field, yuna-style) and splits it into first_name/last_name.
    Also accepts `first_name`/`last_name` directly for compatibility.
    `username` is auto-derived from email if not provided.
    """
    password = serializers.CharField(write_only=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=False, allow_blank=True)
    # yuna sends a single `name` field
    name = serializers.CharField(required=False, allow_blank=True, write_only=True)

    class Meta:
        model = User
        fields = ('email', 'username', 'password', 'password2', 'first_name', 'last_name', 'name')
        extra_kwargs = {
            'username': {'required': False},
            'first_name': {'required': False},
            'last_name': {'required': False},
        }

    def validate(self, attrs):
        password2 = attrs.pop('password2', None)
        if password2 and attrs['password'] != password2:
            raise serializers.ValidationError({'password': 'Passwords do not match.'})

        # Handle single `name` field → split into first/last
        name = attrs.pop('name', None)
        if name:
            parts = name.strip().split(' ', 1)
            attrs.setdefault('first_name', parts[0])
            attrs.setdefault('last_name', parts[1] if len(parts) > 1 else '')

        # Auto-derive username from email if not provided
        if not attrs.get('username'):
            base = attrs['email'].split('@')[0]
            attrs['username'] = base

        return attrs

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user


class UserSerializer(serializers.ModelSerializer):
    """
    Read serializer for the authenticated user.
    Exposes a `name` field (first + last) for yuna compatibility,
    plus all ExamGlow profile fields.
    """
    avatar_url = serializers.SerializerMethodField()
    is_premium = serializers.SerializerMethodField()
    notes_used = serializers.SerializerMethodField()
    notes_limit = serializers.SerializerMethodField()
    # yuna-compatible single name field
    name = serializers.SerializerMethodField()
    # onboarding_completed maps to whether onboarding_status has 'completed' key
    onboarding_completed = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = (
            'id', 'email', 'username', 'first_name', 'last_name', 'name',
            'avatar_url', 'bio', 'university', 'study_streak', 'longest_streak',
            'total_study_time', 'weekly_goal_hours', 'onboarding_status',
            'onboarding_completed', 'created_at', 'is_premium', 'notes_used', 'notes_limit',
            # ExamGlow profile fields
            'school', 'year_group', 'study_goal', 'course', 'subjects', 'updates_opt_in',
        )
        read_only_fields = ('id', 'email', 'study_streak', 'longest_streak', 'total_study_time', 'created_at')

    def get_name(self, obj):
        full = f"{obj.first_name} {obj.last_name}".strip()
        return full or obj.username

    def get_avatar_url(self, obj):
        request = self.context.get('request')
        if obj.avatar and request:
            return request.build_absolute_uri(obj.avatar.url)
        return None

    def get_is_premium(self, obj):
        return obj.has_active_subscription

    def get_notes_used(self, obj):
        return obj.total_resources_created

    def get_notes_limit(self, obj):
        return obj.FREE_NOTES_LIMIT

    def get_onboarding_completed(self, obj):
        if not obj.onboarding_status:
            return False
        return bool(obj.onboarding_status.get('completed'))


class UpdateProfileSerializer(serializers.ModelSerializer):
    """Writable profile fields."""
    name = serializers.CharField(required=False, allow_blank=True, write_only=True)

    class Meta:
        model = User
        fields = (
            'username', 'first_name', 'last_name', 'name',
            'bio', 'university', 'weekly_goal_hours', 'avatar',
            'school', 'year_group', 'study_goal', 'course', 'subjects', 'updates_opt_in',
        )

    def validate(self, attrs):
        name = attrs.pop('name', None)
        if name:
            parts = name.strip().split(' ', 1)
            attrs.setdefault('first_name', parts[0])
            attrs.setdefault('last_name', parts[1] if len(parts) > 1 else '')
        return attrs


class OnboardingSerializer(serializers.Serializer):
    """Handles the yuna-style onboarding payload."""
    school = serializers.CharField(required=False, allow_blank=True)
    year_group = serializers.CharField(required=False, allow_blank=True, source='class')
    goal = serializers.CharField(required=False, allow_blank=True)
    course = serializers.CharField(required=False, allow_blank=True)
    subjects = serializers.ListField(child=serializers.CharField(), required=False)
    updates = serializers.BooleanField(required=False, default=False)
