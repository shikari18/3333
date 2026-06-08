# Exam Glow

An IGCSE/A-Level study platform. React frontend (yuna) + Django REST backend (paw-pal).

## Project Structure

```
exam-glow/
├── frontend/          # React + TanStack Router + Tailwind (formerly yuna)
└── backend/           # Django REST Framework + PostgreSQL (from paw-pal)
    ├── core/          # Django settings, URLs, ASGI
    ├── users/         # Auth, profiles, JWT
    ├── examglow/      # ExamGlow-specific: quizzes, flashcard decks, syllabus, goals
    ├── library/       # AI-powered resource library (PDF, video, flashcards)
    ├── ai_assistant/  # AI chat + tutoring
    ├── planner/       # Study sessions & deadlines
    ├── community/     # Posts & events
    ├── groups/        # Study groups
    ├── assignments/   # Assignment tracking
    ├── workspace/     # Collaborative workspace
    └── payments/      # Paystack subscription management
```

## Quick Start

### Backend (Django)

```bash
cd backend

# Create a virtual environment
python -m venv .venv
source .venv/bin/activate       # Windows: .venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Configure environment
cp .env.example .env
# Edit .env — set DJANGO_SECRET_KEY at minimum

# Run migrations
python manage.py migrate

# Create a superuser
python manage.py createsuperuser

# Start the server
python manage.py runserver
# API available at http://localhost:8000
```

### Frontend (React + Vite)

```bash
cd frontend

# Install dependencies
npm install

# Configure environment
cp .env.example .env
# VITE_API_URL should point to your Django server (default: http://localhost:8000)

# Start dev server
npm run dev
# App available at http://localhost:5173
```

## API Overview

| Prefix | Description |
|--------|-------------|
| `/api/auth/` | Register, login (JWT), logout, profile (`/me/`), onboarding |
| `/api/examglow/` | Quizzes, flashcard decks, syllabus progress, goals, bookmarks, dashboard |
| `/api/library/` | AI-powered resource library (PDF upload, YouTube, flashcards, quizzes) |
| `/api/ai/` | AI chat assistant |
| `/api/planner/` | Study sessions & deadlines |
| `/api/community/` | Posts, events |
| `/api/groups/` | Study groups |
| `/api/assignments/` | Assignment tracking |
| `/api/payments/` | Paystack subscription |
| `/admin/` | Django admin (Unfold) |

## Authentication

The frontend uses **JWT** (stored in `localStorage`):
- `POST /api/auth/register/` → `{ access, refresh, user }`
- `POST /api/auth/login/` → `{ access, refresh }`
- `POST /api/auth/token/refresh/` → `{ access }`
- Include `Authorization: Bearer <access_token>` on all protected requests

## Key Environment Variables

### Backend (`backend/.env`)
| Variable | Description |
|----------|-------------|
| `DJANGO_SECRET_KEY` | Django secret key (required) |
| `DATABASE_URL` | Postgres URL (optional, defaults to SQLite) |
| `OPENROUTER_API_KEY` | LLM API key for AI features |
| `REDIS_URL` | Redis for WebSockets/background tasks |
| `USE_S3` | Enable S3/R2 file storage |

### Frontend (`frontend/.env`)
| Variable | Description |
|----------|-------------|
| `VITE_API_URL` | Django backend URL (default: `http://localhost:8000`) |
| `VITE_GROQ_API_KEY` | Groq key for client-side AI Tutor |
