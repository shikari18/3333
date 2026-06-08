/**
 * user.ts
 * Dashboard, goals, bookmarks, and activity API calls.
 * Replaces yuna's getDashboardDataFn and related createServerFns.
 */
import { api } from '@/lib/api-client';
import type { User } from './auth';

export type StudyGoal = {
  id: number;
  title: string;
  completed: boolean;
  created_at: string;
};

export type UserBookmark = {
  id: number;
  resource_type: string;
  title: string;
  subject: string;
  url: string;
  created_at: string;
};

export type DashboardData = {
  user: User;
  streak: number;
  longest_streak: number;
  goals: StudyGoal[];
  bookmarks: UserBookmark[];
  avgScore: number | null;
  totalAttempts: number;
};

/** Get all dashboard data in one request. */
export async function getDashboardData(): Promise<DashboardData | null> {
  try {
    return await api.get<DashboardData>('/api/examglow/dashboard/');
  } catch {
    return null;
  }
}

// ─── Goals ────────────────────────────────────────────────────────────────────

export async function addGoal(title: string): Promise<StudyGoal> {
  return api.post<StudyGoal>('/api/examglow/goals/', { title });
}

export async function toggleGoal(id: number, completed: boolean): Promise<StudyGoal> {
  return api.patch<StudyGoal>(`/api/examglow/goals/${id}/`, { completed });
}

export async function deleteGoal(id: number): Promise<void> {
  return api.delete(`/api/examglow/goals/${id}/`);
}

// ─── Bookmarks ────────────────────────────────────────────────────────────────

export async function toggleBookmark(data: {
  resourceType: string;
  title: string;
  subject?: string;
  url?: string;
}): Promise<{ bookmarked: boolean }> {
  return api.post<{ bookmarked: boolean }>('/api/examglow/bookmarks/', data);
}

export async function checkBookmark(resourceType: string, title: string): Promise<{ bookmarked: boolean }> {
  return api.get<{ bookmarked: boolean }>(
    `/api/examglow/bookmarks/check/?resourceType=${encodeURIComponent(resourceType)}&title=${encodeURIComponent(title)}`,
  );
}

// ─── Past Papers ─────────────────────────────────────────────────────────────

export type PastPaperAttempt = {
  id: number;
  paper_code: string;
  paper_type: string;
  subject: string;
  session: string;
  year: string;
  attempted_at: string;
};

export async function getPastPaperAttempts(): Promise<PastPaperAttempt[]> {
  return api.get<PastPaperAttempt[]>('/api/examglow/past-papers/');
}

export async function recordPastPaperAttempt(data: Omit<PastPaperAttempt, 'id' | 'attempted_at'>): Promise<PastPaperAttempt> {
  return api.post<PastPaperAttempt>('/api/examglow/past-papers/', data);
}
