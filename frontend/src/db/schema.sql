-- Core auth tables
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  name TEXT NOT NULL,
  password_reset_token TEXT,
  password_reset_expires INTEGER,
  created_at INTEGER DEFAULT (strftime('%s', 'now'))
);

CREATE TABLE IF NOT EXISTS sessions (
  id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
  user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  token TEXT UNIQUE NOT NULL,
  expires_at INTEGER NOT NULL,
  created_at INTEGER DEFAULT (strftime('%s', 'now'))
);

CREATE TABLE IF NOT EXISTS user_profiles (
  id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
  user_id TEXT UNIQUE NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  school TEXT,
  class TEXT,
  goal TEXT,
  course TEXT,
  subjects TEXT DEFAULT '["Biology","Chemistry","Physics","Mathematics"]',
  updates_opt_in INTEGER DEFAULT 0,
  onboarding_completed INTEGER DEFAULT 0,
  created_at INTEGER DEFAULT (strftime('%s', 'now')),
  updated_at INTEGER DEFAULT (strftime('%s', 'now'))
);

CREATE TABLE IF NOT EXISTS user_streaks (
  id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
  user_id TEXT UNIQUE NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  current_streak INTEGER DEFAULT 0,
  longest_streak INTEGER DEFAULT 0,
  last_study_date TEXT,
  updated_at INTEGER DEFAULT (strftime('%s', 'now')),
  created_at INTEGER DEFAULT (strftime('%s', 'now'))
);

-- User activity & engagement
CREATE TABLE IF NOT EXISTS user_activity (
  id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
  user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  activity_type TEXT NOT NULL,
  title TEXT NOT NULL,
  score_text TEXT,
  created_at INTEGER DEFAULT (strftime('%s', 'now'))
);

CREATE TABLE IF NOT EXISTS user_bookmarks (
  id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
  user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  resource_type TEXT NOT NULL,
  title TEXT NOT NULL,
  subject TEXT,
  url TEXT,
  created_at INTEGER DEFAULT (strftime('%s', 'now'))
);

CREATE TABLE IF NOT EXISTS user_study_goals (
  id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
  user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  completed INTEGER DEFAULT 0,
  created_at INTEGER DEFAULT (strftime('%s', 'now'))
);

-- Flashcards
CREATE TABLE IF NOT EXISTS flashcard_decks (
  id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
  subject TEXT NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  card_count INTEGER DEFAULT 0,
  image_url TEXT,
  course TEXT DEFAULT 'Cambridge IGCSE',
  level TEXT DEFAULT 'IGCSE',
  created_at INTEGER DEFAULT (strftime('%s', 'now'))
);

CREATE TABLE IF NOT EXISTS flashcards (
  id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
  deck_id TEXT NOT NULL REFERENCES flashcard_decks(id) ON DELETE CASCADE,
  front TEXT NOT NULL,
  back TEXT NOT NULL,
  topic TEXT NOT NULL,
  image_url TEXT,
  created_at INTEGER DEFAULT (strftime('%s', 'now'))
);

CREATE TABLE IF NOT EXISTS user_flashcard_progress (
  id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
  user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  flashcard_id TEXT NOT NULL REFERENCES flashcards(id) ON DELETE CASCADE,
  status TEXT DEFAULT 'new',
  times_seen INTEGER DEFAULT 0,
  times_correct INTEGER DEFAULT 0,
  last_seen INTEGER DEFAULT (strftime('%s', 'now')),
  -- SRS fields
  interval_days INTEGER DEFAULT 1,
  ease_factor REAL DEFAULT 2.5,
  due_date TEXT DEFAULT (date('now')),
  UNIQUE(user_id, flashcard_id)
);

-- Quizzes
CREATE TABLE IF NOT EXISTS quiz_sets (
  id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
  subject TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  time_limit_seconds INTEGER DEFAULT 300,
  image_url TEXT,
  course TEXT DEFAULT 'Cambridge IGCSE',
  level TEXT DEFAULT 'IGCSE',
  created_at INTEGER DEFAULT (strftime('%s', 'now'))
);

CREATE TABLE IF NOT EXISTS quiz_questions (
  id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
  quiz_set_id TEXT NOT NULL REFERENCES quiz_sets(id) ON DELETE CASCADE,
  question TEXT NOT NULL,
  option_a TEXT NOT NULL,
  option_b TEXT NOT NULL,
  option_c TEXT NOT NULL,
  option_d TEXT NOT NULL,
  correct_answer TEXT NOT NULL,
  explanation TEXT NOT NULL,
  topic TEXT NOT NULL,
  sort_order INTEGER DEFAULT 0,
  image_url TEXT
);

CREATE TABLE IF NOT EXISTS user_quiz_attempts (
  id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
  user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  quiz_set_id TEXT NOT NULL REFERENCES quiz_sets(id) ON DELETE CASCADE,
  score INTEGER NOT NULL,
  total INTEGER NOT NULL,
  time_taken_seconds INTEGER,
  answers TEXT,
  created_at INTEGER DEFAULT (strftime('%s', 'now'))
);

-- Syllabus progress (replaces localStorage)
CREATE TABLE IF NOT EXISTS user_syllabus_progress (
  id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
  user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  subject_id TEXT NOT NULL,
  objective_id TEXT NOT NULL,
  completed INTEGER DEFAULT 0,
  completed_at INTEGER,
  created_at INTEGER DEFAULT (strftime('%s', 'now')),
  UNIQUE(user_id, subject_id, objective_id)
);

-- Past paper tracking
CREATE TABLE IF NOT EXISTS user_past_paper_attempts (
  id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
  user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  paper_code TEXT NOT NULL,
  paper_type TEXT NOT NULL,
  subject TEXT NOT NULL,
  session TEXT NOT NULL,
  year TEXT NOT NULL,
  attempted_at INTEGER DEFAULT (strftime('%s', 'now'))
);
