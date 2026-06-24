/**
 * groq-client.ts
 * Direct client-side wrapper for the Groq API.
 * Uses VITE_GROQ_API_KEY from .env — no backend required.
 */

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY || "";
const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";

// Default model — llama-3.3-70b gives best quality for educational content
const DEFAULT_MODEL = "llama-3.3-70b-versatile";

export interface GroqMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

export interface GroqOptions {
  model?: string;
  temperature?: number;
  max_tokens?: number;
  signal?: AbortSignal;
}

/**
 * Send a chat completion request directly to Groq.
 * Returns the assistant's reply text.
 */
export async function groqChat(
  messages: GroqMessage[],
  opts: GroqOptions = {}
): Promise<string> {
  if (!GROQ_API_KEY) {
    throw new Error(
      "VITE_GROQ_API_KEY is not set. Add it to your frontend/.env file."
    );
  }

  const response = await fetch(GROQ_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${GROQ_API_KEY}`,
    },
    signal: opts.signal,
    body: JSON.stringify({
      model: opts.model ?? DEFAULT_MODEL,
      temperature: opts.temperature ?? 0.7,
      max_tokens: opts.max_tokens ?? 4096,
      messages,
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Groq API error ${response.status}: ${errorBody}`);
  }

  const data = await response.json();
  const content = data.choices?.[0]?.message?.content ?? "";
  return content.trim();
}

/**
 * Convenience: single user prompt → assistant reply.
 */
export async function groqAsk(
  systemPrompt: string,
  userPrompt: string,
  opts: GroqOptions = {}
): Promise<string> {
  return groqChat(
    [
      { role: "system", content: systemPrompt },
      { role: "user", content: userPrompt },
    ],
    opts
  );
}
