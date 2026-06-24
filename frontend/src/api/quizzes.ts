/**
 * quizzes.ts
 * Quiz API calls → Django /api/examglow/quizzes/ endpoints.
 * Replaces yuna's SQLite-backed createServerFn quiz functions.
 */
import { api } from '@/lib/api-client';

export type QuizSet = {
  id: number | string;
  subject: string;
  title: string;
  description: string;
  time_limit_seconds: number;
  image_url?: string;
  course: string;
  level: string;
  attempt_count: number;
  best_score: number | null;
};

export type QuizQuestion = {
  id: number | string;
  quiz_set_id: number | string;
  question: string;
  option_a: string;
  option_b: string;
  option_c: string;
  option_d: string;
  correct_answer: string;
  explanation: string;
  topic: string;
  sort_order: number;
  image_url?: string;
};

export type QuizResult = {
  score: number;
  total: number;
  pct: number;
  graded: Record<string, { correct: boolean; correctAnswer: string }>;
};

/** Get all quiz sets with the user's attempt stats. */
export async function getQuizSets(): Promise<QuizSet[]> {
  return api.get<QuizSet[]>('/api/examglow/quizzes/');
}

/** Get a single quiz set with all its questions. */
export async function getQuiz(quizId: number): Promise<{ quiz: QuizSet; questions: QuizQuestion[] }> {
  return api.get<{ quiz: QuizSet; questions: QuizQuestion[] }>(`/api/examglow/quizzes/${quizId}/`);
}

/** Submit answers and receive a graded result. */
export async function submitQuiz(
  quizId: number,
  answers: Record<string, string>,
  timeTakenSeconds: number,
): Promise<QuizResult> {
  return api.post<QuizResult>(`/api/examglow/quizzes/${quizId}/submit/`, {
    answers,
    time_taken_seconds: timeTakenSeconds,
  });
}
