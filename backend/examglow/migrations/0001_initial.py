from django.db import migrations, models
import django.db.models.deletion
from django.conf import settings


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='SyllabusProgress',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('subject_id', models.CharField(max_length=100)),
                ('objective_id', models.CharField(max_length=200)),
                ('completed', models.BooleanField(default=False)),
                ('completed_at', models.DateTimeField(blank=True, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='syllabus_progress', to=settings.AUTH_USER_MODEL)),
            ],
            options={'ordering': ['subject_id', 'objective_id']},
        ),
        migrations.AlterUniqueTogether(
            name='syllabusprogress',
            unique_together={('user', 'subject_id', 'objective_id')},
        ),
        migrations.CreateModel(
            name='QuizSet',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('subject', models.CharField(db_index=True, max_length=100)),
                ('title', models.CharField(max_length=300)),
                ('description', models.TextField(blank=True)),
                ('time_limit_seconds', models.IntegerField(default=300)),
                ('image_url', models.URLField(blank=True)),
                ('course', models.CharField(default='Cambridge IGCSE', max_length=100)),
                ('level', models.CharField(default='IGCSE', max_length=50)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
            options={'ordering': ['subject', 'title']},
        ),
        migrations.CreateModel(
            name='QuizQuestion',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('question', models.TextField()),
                ('option_a', models.TextField()),
                ('option_b', models.TextField()),
                ('option_c', models.TextField()),
                ('option_d', models.TextField()),
                ('correct_answer', models.CharField(max_length=1)),
                ('explanation', models.TextField(blank=True)),
                ('topic', models.CharField(blank=True, max_length=200)),
                ('sort_order', models.IntegerField(default=0)),
                ('image_url', models.URLField(blank=True)),
                ('quiz_set', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='questions', to='examglow.quizset')),
            ],
            options={'ordering': ['sort_order']},
        ),
        migrations.CreateModel(
            name='QuizAttempt',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('score', models.IntegerField()),
                ('total', models.IntegerField()),
                ('time_taken_seconds', models.IntegerField(blank=True, null=True)),
                ('answers', models.JSONField(blank=True, default=dict)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('quiz_set', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='attempts', to='examglow.quizset')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='quiz_attempts', to=settings.AUTH_USER_MODEL)),
            ],
            options={'ordering': ['-created_at']},
        ),
        migrations.CreateModel(
            name='FlashcardDeck',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('subject', models.CharField(db_index=True, max_length=100)),
                ('name', models.CharField(max_length=300)),
                ('description', models.TextField(blank=True)),
                ('card_count', models.IntegerField(default=0)),
                ('image_url', models.URLField(blank=True)),
                ('course', models.CharField(default='Cambridge IGCSE', max_length=100)),
                ('level', models.CharField(default='IGCSE', max_length=50)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
            options={'ordering': ['subject', 'name']},
        ),
        migrations.CreateModel(
            name='StaticFlashcard',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('front', models.TextField()),
                ('back', models.TextField()),
                ('topic', models.CharField(blank=True, max_length=200)),
                ('image_url', models.URLField(blank=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('deck', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='cards', to='examglow.flashcarddeck')),
            ],
            options={'ordering': ['created_at']},
        ),
        migrations.CreateModel(
            name='UserFlashcardProgress',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.CharField(choices=[('new', 'New'), ('learning', 'Learning'), ('known', 'Known')], default='new', max_length=20)),
                ('times_seen', models.IntegerField(default=0)),
                ('times_correct', models.IntegerField(default=0)),
                ('last_seen', models.DateTimeField(auto_now=True)),
                ('interval_days', models.IntegerField(default=1)),
                ('ease_factor', models.FloatField(default=2.5)),
                ('due_date', models.DateField(auto_now_add=True)),
                ('flashcard', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='examglow.staticflashcard')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='static_flashcard_progress', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AlterUniqueTogether(
            name='userflashcardprogress',
            unique_together={('user', 'flashcard')},
        ),
        migrations.CreateModel(
            name='PastPaperAttempt',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('paper_code', models.CharField(max_length=100)),
                ('paper_type', models.CharField(max_length=50)),
                ('subject', models.CharField(max_length=100)),
                ('session', models.CharField(max_length=50)),
                ('year', models.CharField(max_length=10)),
                ('attempted_at', models.DateTimeField(auto_now_add=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='past_paper_attempts', to=settings.AUTH_USER_MODEL)),
            ],
            options={'ordering': ['-attempted_at']},
        ),
        migrations.CreateModel(
            name='StudyGoal',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=300)),
                ('completed', models.BooleanField(default=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='study_goals', to=settings.AUTH_USER_MODEL)),
            ],
            options={'ordering': ['created_at']},
        ),
        migrations.CreateModel(
            name='UserBookmark',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('resource_type', models.CharField(max_length=50)),
                ('title', models.CharField(max_length=300)),
                ('subject', models.CharField(blank=True, max_length=100)),
                ('url', models.CharField(blank=True, max_length=500)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='examglow_bookmarks', to=settings.AUTH_USER_MODEL)),
            ],
            options={'ordering': ['-created_at']},
        ),
        migrations.AlterUniqueTogether(
            name='userbookmark',
            unique_together={('user', 'resource_type', 'title')},
        ),
    ]
