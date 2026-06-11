#!/usr/bin/env bash
# ExamGlow — Render build script
# exit on error
set -o errexit

echo "==> Installing Python dependencies..."
pip install -r requirements.txt

echo "==> Collecting static files..."
python manage.py collectstatic --noinput

echo "==> Enabling pgvector extension (if PostgreSQL is available)..."
python -c "
import os
try:
    import psycopg2
    db_url = os.getenv('DATABASE_URL', '')
    if db_url:
        conn = psycopg2.connect(db_url)
        conn.autocommit = True
        cur = conn.cursor()
        cur.execute('CREATE EXTENSION IF NOT EXISTS vector;')
        cur.close()
        conn.close()
        print('pgvector extension enabled successfully')
    else:
        print('No DATABASE_URL set, skipping pgvector')
except Exception as e:
    print(f'Skipping pgvector enable: {e}')
"

echo "==> Running migrations..."
python manage.py migrate --noinput

echo "==> Clearing dead background tasks..."
python manage.py clear_dead_tasks || true

echo "==> Build complete."
