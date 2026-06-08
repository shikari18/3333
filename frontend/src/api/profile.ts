/**
 * profile.ts
 * User profile API calls → Django /api/auth/me/ endpoint.
 * Replaces yuna's getUserProfileFn and updateSubjectsFn.
 */
import { api } from '@/lib/api-client';
import type { User } from './auth';

/** Fetch the current user's profile. */
export async function getUserProfile(): Promise<User | null> {
  try {
    return await api.get<User>('/api/auth/me/');
  } catch {
    return null;
  }
}

/** Update the user's subjects list. */
export async function updateSubjects(subjects: string[]): Promise<{ success: boolean }> {
  await api.patch('/api/auth/me/', { subjects });
  return { success: true };
}

/** Update any writable profile fields. */
export async function updateProfile(data: Partial<{
  name: string;
  first_name: string;
  last_name: string;
  bio: string;
  university: string;
  school: string;
  year_group: string;
  study_goal: string;
  course: string;
  subjects: string[];
  updates_opt_in: boolean;
  weekly_goal_hours: number;
}>): Promise<User> {
  return api.patch<User>('/api/auth/me/', data);
}
