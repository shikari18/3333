/**
 * syllabus.ts
 * Syllabus progress API calls → Django /api/examglow/syllabus/ endpoints.
 * Replaces yuna's createServerFn syllabus functions.
 */
import { api } from '@/lib/api-client';

export type SyllabusProgressRow = {
  subject_id: string;
  objective_id: string;
  completed: boolean;
  completed_at: string | null;
};

/** Get all syllabus progress rows for the current user. */
export async function getSyllabusProgress(): Promise<SyllabusProgressRow[]> {
  return api.get<SyllabusProgressRow[]>('/api/examglow/syllabus/progress/');
}

/** Toggle a single syllabus objective. */
export async function toggleSyllabusObjective(
  subjectId: string,
  objectiveId: string,
  completed: boolean,
): Promise<SyllabusProgressRow> {
  return api.post<SyllabusProgressRow>('/api/examglow/syllabus/toggle/', {
    subjectId,
    objectiveId,
    completed,
  });
}

/** Bulk set progress (e.g. migrating from localStorage). */
export async function bulkSetSyllabusProgress(
  progress: Array<{ subjectId: string; objectiveId: string; completed: boolean }>,
): Promise<{ updated: number }> {
  return api.post<{ updated: number }>('/api/examglow/syllabus/progress/', { progress });
}
