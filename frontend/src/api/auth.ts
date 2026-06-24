/**
 * auth.ts
 * Authentication API calls → Django /api/auth/ endpoints.
 * Replaces yuna's createServerFn-based auth with direct REST calls.
 */
import { api, setTokens, clearTokens, getAccessToken } from '@/lib/api-client';

export type User = {
  id: number;
  email: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  avatar_url: string | null;
  bio: string;
  university: string;
  school: string;
  year_group: string;
  study_goal: string;
  course: string;
  subjects: string[];
  updates_opt_in: boolean;
  study_streak: number;
  longest_streak: number;
  total_study_time: number;
  weekly_goal_hours: number;
  onboarding_status: Record<string, boolean>;
  onboarding_completed: boolean;
  is_premium: boolean;
  notes_used: number;
  notes_limit: number;
  created_at: string;
};

type AuthResponse = {
  user: User;
  access: string;
  refresh: string;
};

/** Sign up with email, password, and name. */
export async function signUp(email: string, password: string, name: string): Promise<{ user: User; needsOnboarding: boolean }> {
  const res = await api.post<AuthResponse>('/api/auth/register/', { email, password, name });
  setTokens(res.access, res.refresh);
  return { user: res.user, needsOnboarding: !res.user.onboarding_completed };
}

/** Log in with email and password. Returns access/refresh tokens. */
export async function logIn(email: string, password: string): Promise<{ user: User; needsOnboarding: boolean }> {
  const res = await api.post<{ access: string; refresh: string }>('/api/auth/login/', { email, password });
  setTokens(res.access, res.refresh);
  const user = await api.get<User>('/api/auth/me/');
  return { user, needsOnboarding: !user.onboarding_completed };
}

/** Log out (blacklists the refresh token). */
export async function logOut(refreshToken?: string): Promise<void> {
  try {
    const token = refreshToken ?? localStorage.getItem('eg_refresh');
    if (token) {
      await api.post('/api/auth/logout/', { refresh: token });
    }
  } finally {
    clearTokens();
  }
}

/** Fetch the currently authenticated user, or null if not logged in. */
export async function getSession(): Promise<{ user: User | null }> {
  if (!getAccessToken()) return { user: null };
  try {
    const user = await api.get<User>('/api/auth/me/');
    return { user };
  } catch {
    return { user: null };
  }
}

/** Save onboarding data after registration. */
export async function saveOnboarding(data: {
  school: string;
  class: string;
  goal: string;
  course: string;
  subjects?: string[];
  updates: boolean;
}): Promise<User> {
  return api.post<User>('/api/auth/onboarding/save/', {
    school: data.school,
    year_group: data.class,
    goal: data.goal,
    course: data.course,
    subjects: data.subjects ?? ['Biology', 'Chemistry', 'Physics', 'Mathematics'],
    updates: data.updates,
  });
}

/** Request a password reset email. */
export async function requestPasswordReset(email: string): Promise<{ success: boolean }> {
  // Django doesn't expose this by default; handled server-side.
  // Kept as stub for compatibility with yuna UI.
  return { success: true };
}

/** Log in or Sign up using Google OAuth access token. */
export async function logInWithGoogle(accessToken: string): Promise<{ user: User; needsOnboarding: boolean }> {
  const res = await api.post<{ access: string; refresh: string }>('/api/auth/oauth/google/', { access_token: accessToken });
  setTokens(res.access, res.refresh);
  const user = await api.get<User>('/api/auth/me/');
  return { user, needsOnboarding: !user.onboarding_completed };
}

