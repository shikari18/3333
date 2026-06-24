/**
 * flashcards.ts
 * Flashcard API calls → Django /api/examglow/flashcards/ endpoints.
 * Replaces yuna's SQLite-backed createServerFn flashcard functions.
 */
import { api } from '@/lib/api-client';

export type FlashcardDeck = {
  id: number | string;
  subject: string;
  name: string;
  description: string;
  card_count: number;
  image_url?: string;
  course?: string;
  level?: string;
};

export type Flashcard = {
  id: number | string;
  deck_id: number | string;
  front: string;
  back: string;
  topic: string;
  image_url?: string;
  status?: 'new' | 'learning' | 'known';
  times_correct?: number;
  times_seen?: number;
  due_date?: string;
  interval_days?: number;
};

export type DeckWithCards = {
  deck: FlashcardDeck;
  cards: Flashcard[];
  masteredCount: number;
  totalCount: number;
};

/** Get all pre-seeded flashcard decks (course-prioritised for the current user). */
export async function getDecks(): Promise<FlashcardDeck[]> {
  return api.get<FlashcardDeck[]>('/api/examglow/flashcards/decks/');
}

/** Get a deck with all its cards including user progress. */
export async function getDeckWithCards(deckId: number): Promise<DeckWithCards> {
  return api.get<DeckWithCards>(`/api/examglow/flashcards/decks/${deckId}/`);
}

/** Update progress for a single flashcard (SM-2 SRS). */
export async function updateCardProgress(
  flashcardId: number,
  known: boolean,
  quality?: number, // 0-5
): Promise<{ success: boolean }> {
  return api.post<{ success: boolean }>('/api/examglow/flashcards/progress/', {
    flashcard_id: flashcardId,
    known,
    quality: quality ?? (known ? 4 : 1),
  });
}

/** Get cards due for review today in a given deck. */
export async function getDueCards(deckId: number): Promise<{ cards: Flashcard[]; dueCount: number }> {
  return api.get<{ cards: Flashcard[]; dueCount: number }>(
    `/api/examglow/flashcards/decks/${deckId}/due/`,
  );
}
