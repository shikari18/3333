/**
 * session.ts
 * Client-side session helpers.
 * Replaces the server-side cookie session with JWT-in-localStorage.
 * The `getCurrentUser` function is now async and calls the Django API.
 */
import { getSession } from '@/api/auth';
import type { User } from '@/api/auth';

export type { User };

/** Returns the current authenticated user, or null. */
export async function getCurrentUser(): Promise<User | null> {
  const { user } = await getSession();
  return user;
}

/** True if a JWT access token is present (doesn't verify it server-side). */
export function isLoggedIn(): boolean {
  return Boolean(localStorage.getItem('eg_access'));
}
