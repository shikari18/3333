/**
 * gemini-listen.ts
 * Microphone → Gemini Live → transcript (speech-to-text).
 *
 * Uses the same BidiGenerateContent WebSocket as VoiceOrb but in
 * "text output only" mode so Gemini returns a transcript string rather
 * than audio. Falls back to browser webkitSpeechRecognition if no API key.
 */

const GEMINI_KEY = import.meta.env.VITE_GEMINI_VOICE_API_KEY || "";

export type ListenHandle = {
  stop: () => void;
};

type ListenOptions = {
  onTranscript: (text: string) => void;
  onError?: (err: string) => void;
  onStart?: () => void;
  onStop?: () => void;
};

/** Convert Float32 PCM samples → 16-bit LE base64 string for Gemini */
function float32ToBase64Pcm(float32: Float32Array): string {
  const int16 = new Int16Array(float32.length);
  for (let i = 0; i < float32.length; i++) {
    const s = Math.max(-1, Math.min(1, float32[i]));
    int16[i] = s < 0 ? s * 0x8000 : s * 0x7fff;
  }
  const bytes = new Uint8Array(int16.buffer);
  let binary = "";
  for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
  return btoa(binary);
}

/**
 * Starts Gemini Live listening via mic.
 * Returns a handle with stop() to end recording.
 */
export function startGeminiListen(opts: ListenOptions): ListenHandle {
  if (!GEMINI_KEY) {
    // Fallback: browser SpeechRecognition
    return startBrowserListen(opts);
  }

  let stopped = false;
  let ws: WebSocket | null = null;
  let audioCtx: AudioContext | null = null;
  let stream: MediaStream | null = null;
  let processor: ScriptProcessorNode | null = null;
  let transcriptParts: string[] = [];

  const cleanup = () => {
    try { processor?.disconnect(); } catch { /* ignore */ }
    try { stream?.getTracks().forEach(t => t.stop()); } catch { /* ignore */ }
    try { audioCtx?.close(); } catch { /* ignore */ }
    try { if (ws && ws.readyState <= 1) ws.close(); } catch { /* ignore */ }
    processor = null; stream = null; audioCtx = null; ws = null;
    opts.onStop?.();
  };

  const wsUrl = `wss://generativelanguage.googleapis.com/ws/google.ai.generativelanguage.v1beta.GenerativeService.BidiGenerateContent?key=${GEMINI_KEY}`;
  ws = new WebSocket(wsUrl);

  ws.onopen = async () => {
    if (stopped) { ws?.close(); return; }
    // Send setup — text output only (no audio response)
    ws!.send(JSON.stringify({
      setup: {
        model: "models/gemini-2.5-flash-native-audio-latest",
        generationConfig: {
          responseModalities: ["TEXT"],
        },
        systemInstruction: {
          parts: [{ text: "You are a speech transcription engine. Transcribe the audio exactly as spoken. Output only the transcription text, nothing else." }],
        },
      },
    }));
  };

  ws.onmessage = async (event) => {
    try {
      let data: any;
      if (event.data instanceof Blob) {
        data = JSON.parse(await event.data.text());
      } else {
        data = JSON.parse(event.data as string);
      }

      if (data.setupComplete) {
        // Setup done — start capturing microphone
        opts.onStart?.();
        try {
          stream = await navigator.mediaDevices.getUserMedia({
            audio: { channelCount: 1, sampleRate: 16000, echoCancellation: true, noiseSuppression: true },
          });
          audioCtx = new AudioContext({ sampleRate: 16000 });
          const source = audioCtx.createMediaStreamSource(stream);
          processor = audioCtx.createScriptProcessor(4096, 1, 1);
          source.connect(processor);
          processor.connect(audioCtx.destination);
          processor.onaudioprocess = (e) => {
            if (stopped || !ws || ws.readyState !== WebSocket.OPEN) return;
            const samples = e.inputBuffer.getChannelData(0);
            const b64 = float32ToBase64Pcm(samples);
            ws.send(JSON.stringify({
              realtimeInput: {
                mediaChunks: [{ mimeType: "audio/pcm;rate=16000", data: b64 }],
              },
            }));
          };
        } catch (err) {
          opts.onError?.("Mic access denied.");
          cleanup();
        }
      }

      // Collect transcript text chunks
      const parts = data.serverContent?.modelTurn?.parts;
      if (Array.isArray(parts)) {
        for (const part of parts) {
          if (typeof part.text === "string" && part.text.trim()) {
            transcriptParts.push(part.text.trim());
          }
        }
      }

      if (data.serverContent?.turnComplete) {
        const full = transcriptParts.join(" ").trim();
        transcriptParts = [];
        if (full) opts.onTranscript(full);
        if (!stopped) {
          // Auto-stop after getting a turn-complete transcript
          stopped = true;
          cleanup();
        }
      }
    } catch { /* ignore parse errors */ }
  };

  ws.onerror = () => {
    if (stopped) return;
    // Fallback to browser STT
    cleanup();
    startBrowserListen(opts);
  };

  ws.onclose = () => {
    if (!stopped) cleanup();
  };

  return {
    stop: () => {
      if (stopped) return;
      stopped = true;
      // Signal end-of-turn so Gemini processes what was said
      try {
        if (ws && ws.readyState === WebSocket.OPEN) {
          ws.send(JSON.stringify({ clientContent: { turnComplete: true } }));
        }
      } catch { /* ignore */ }
      setTimeout(cleanup, 800); // Give Gemini 800ms to process & respond
    },
  };
}

/** Fallback: browser webkitSpeechRecognition */
function startBrowserListen(opts: ListenOptions): ListenHandle {
  const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
  if (!SR) {
    opts.onError?.("Voice input not supported. Please use Chrome.");
    return { stop: () => {} };
  }

  const rec = new SR();
  rec.lang = "en-US";
  rec.interimResults = false;
  rec.continuous = false;

  rec.onresult = (e: any) => {
    const transcript = e.results[0]?.[0]?.transcript?.trim();
    if (transcript) opts.onTranscript(transcript);
    opts.onStop?.();
  };
  rec.onerror = () => {
    opts.onError?.("Voice recognition error.");
    opts.onStop?.();
  };
  rec.onend = () => opts.onStop?.();

  rec.start();
  opts.onStart?.();

  return { stop: () => { try { rec.stop(); } catch { /* ignore */ } } };
}
