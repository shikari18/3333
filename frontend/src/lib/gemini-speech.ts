/**
 * gemini-speech.ts
 * Speak text using Gemini Live audio with pre-buffered streaming.
 */
export type GeminiSpeechHandle = {
  stop: () => void;
};

type SpeakOptions = {
  voiceName?: string;
  onStart?: () => void;
  onDone?: () => void;
  onError?: (err: unknown) => void;
};

const GEMINI_VOICE_API_KEY =
  import.meta.env.VITE_GEMINI_VOICE_API_KEY || "";

let current: {
  ws: WebSocket | null;
  audioCtx: AudioContext | null;
  activeSources: AudioBufferSourceNode[];
  nextPlaybackTime: number;
} | null = null;

function stopCurrent() {
  if (!current) return;
  try {
    current.activeSources.forEach((s) => {
      try { s.stop(); } catch { /* ignore */ }
    });
  } finally {
    current.activeSources = [];
    current.nextPlaybackTime = 0;
    try { current.ws?.close(); } catch { /* ignore */ }
    current.ws = null;
    try { current.audioCtx?.close(); } catch { /* ignore */ }
    current.audioCtx = null;
    current = null;
  }
}

function base64ToInt16Array(b64: string): Int16Array {
  const binary = atob(b64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return new Int16Array(bytes.buffer);
}

/**
 * Schedule one PCM audio chunk for playback.
 */
function schedulePlaybackChunk(
  ctx: AudioContext,
  chunk: Int16Array,
  onChunkEnded?: () => void
) {
  const sampleRate = 24000;
  const buffer = ctx.createBuffer(1, chunk.length, sampleRate);
  const channelData = buffer.getChannelData(0);
  for (let i = 0; i < chunk.length; i++) channelData[i] = chunk[i] / 32768;

  const source = ctx.createBufferSource();
  source.buffer = buffer;
  source.connect(ctx.destination);

  if (!current) return;
  current.activeSources.push(source);

  const now = ctx.currentTime;
  let startTime = current.nextPlaybackTime;
  if (startTime < now) startTime = now + 0.03;

  source.start(startTime);
  current.nextPlaybackTime = startTime + buffer.duration;

  source.onended = () => {
    if (!current) return;
    current.activeSources = current.activeSources.filter((s) => s !== source);
    onChunkEnded?.();
  };
}

export type PreparedSpeech = {
  ws: WebSocket;
  audioCtx: AudioContext;
  voiceName: string;
  setupDone: boolean;
  isFullyBuffered: boolean;
  bufferedChunks: Int16Array[];
  onSetupComplete?: () => void;
  onBufferComplete?: () => void;
  onChunkReceived?: (chunk: Int16Array) => void;
  onError?: (err: unknown) => void;
};

/**
 * Preconnects a Gemini speech WebSocket and pre-streams the audio chunks in the background.
 */
export function prepareGeminiSpeech(text: string, voiceName: string): PreparedSpeech {
  const apiKey = GEMINI_VOICE_API_KEY;
  const wsUrl = `wss://generativelanguage.googleapis.com/ws/google.ai.generativelanguage.v1beta.GenerativeService.BidiGenerateContent?key=${apiKey}`;

  const ws = new WebSocket(wsUrl);
  const audioCtx = new AudioContext();
  const prepared: PreparedSpeech = {
    ws,
    audioCtx,
    voiceName,
    setupDone: false,
    isFullyBuffered: false,
    bufferedChunks: []
  };

  const sendPrompt = () => {
    if (ws.readyState !== WebSocket.OPEN) return;
    ws.send(JSON.stringify({
      clientContent: {
        turns: [{
          role: "user",
          parts: [{
            text:
              "Read the following text aloud naturally. Do not add extra words. " +
              "If the text contains markdown, ignore the markdown symbols and read it as normal speech.\n\n" +
              text,
          }],
        }],
        turnComplete: true,
      },
    }));
  };

  ws.onopen = () => {
    ws.send(JSON.stringify({
      setup: {
        model: "models/gemini-2.5-flash-native-audio-latest",
        generationConfig: {
          responseModalities: ["AUDIO"],
          speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName } } },
        },
        systemInstruction: {
          parts: [{ text: "You are a text-to-speech engine. Output audio only. Do not include any additional commentary or formatting." }],
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
        data = JSON.parse(event.data);
      }

      if (data.setupComplete) {
        prepared.setupDone = true;
        sendPrompt();
        prepared.onSetupComplete?.();
        return;
      }

      const parts = data.serverContent?.modelTurn?.parts;
      if (Array.isArray(parts)) {
        for (const part of parts) {
          if (part.inlineData?.mimeType?.startsWith("audio/pcm") && part.inlineData?.data) {
            const pcmData = base64ToInt16Array(part.inlineData.data);
            prepared.bufferedChunks.push(pcmData);
            prepared.onChunkReceived?.(pcmData);
          }
        }
      }

      if (data.serverContent?.turnComplete) {
        prepared.isFullyBuffered = true;
        prepared.onBufferComplete?.();
        // Close socket as we got everything
        try { ws.close(); } catch {}
      }
    } catch (err) {
      prepared.onError?.(err);
      try { ws.close(); } catch {}
    }
  };

  ws.onerror = (err) => {
    prepared.onError?.(err);
    try { ws.close(); } catch {}
  };

  return prepared;
}

/**
 * Plays a pre-streamed speech turn.
 */
export function playPreparedSpeech(
  prepared: PreparedSpeech,
  opts: SpeakOptions
): GeminiSpeechHandle {
  stopCurrent();

  const ctx = prepared.audioCtx;
  current = {
    ws: prepared.ws,
    audioCtx: ctx,
    activeSources: [],
    nextPlaybackTime: 0
  };

  let turnComplete = prepared.isFullyBuffered;
  let doneCalled = false;

  const triggerDone = () => {
    if (doneCalled) return;
    doneCalled = true;
    const cb = opts.onDone;
    stopCurrent();
    cb?.();
  };

  const checkAllDone = () => {
    if (turnComplete && (current?.activeSources?.length ?? 0) === 0) {
      triggerDone();
    }
  };

  opts.onStart?.();

  // Play existing buffered chunks
  let playedCount = 0;
  const playNextBuffered = () => {
    if (!current) return;
    while (playedCount < prepared.bufferedChunks.length) {
      const chunk = prepared.bufferedChunks[playedCount];
      schedulePlaybackChunk(ctx, chunk, checkAllDone);
      playedCount++;
    }
  };

  playNextBuffered();

  if (turnComplete) {
    checkAllDone();
  } else {
    prepared.onChunkReceived = () => {
      if (!current) return;
      playNextBuffered();
    };
    prepared.onBufferComplete = () => {
      turnComplete = true;
      checkAllDone();
    };
    prepared.onError = (err) => {
      opts.onError?.(err);
      triggerDone();
    };
  }

  return {
    stop: () => {
      triggerDone();
    }
  };
}

/**
 * Speaks text using Gemini Live Audio (fallback / on-demand if not prepared).
 */
export function speakGemini(
  text: string,
  opts: SpeakOptions = {}
): GeminiSpeechHandle {
  stopCurrent();

  const voiceName = opts.voiceName ||
    (typeof localStorage !== "undefined" ? localStorage.getItem("examglow_voice") : null) ||
    "Aoede";
  const apiKey = GEMINI_VOICE_API_KEY;
  const wsUrl = `wss://generativelanguage.googleapis.com/ws/google.ai.generativelanguage.v1beta.GenerativeService.BidiGenerateContent?key=${apiKey}`;

  const ws = new WebSocket(wsUrl);
  const audioCtx = new AudioContext();
  current = { ws, audioCtx, activeSources: [], nextPlaybackTime: 0 };

  let setupDone = false;
  let turnComplete = false;
  let doneCalled = false;

  const triggerDone = () => {
    if (doneCalled) return;
    doneCalled = true;
    const cb = opts.onDone;
    stopCurrent();
    cb?.();
  };

  const checkAllDone = () => {
    if (turnComplete && (current?.activeSources?.length ?? 0) === 0) {
      triggerDone();
    }
  };

  const sendPrompt = () => {
    if (!current?.ws || current.ws.readyState !== WebSocket.OPEN) return;
    current.ws.send(JSON.stringify({
      clientContent: {
        turns: [{
          role: "user",
          parts: [{
            text:
              "Read the following text aloud naturally. Do not add extra words. " +
              "If the text contains markdown, ignore the markdown symbols and read it as normal speech.\n\n" +
              text,
          }],
        }],
        turnComplete: true,
      },
    }));
    opts.onStart?.();
  };

  ws.onopen = () => {
    ws.send(JSON.stringify({
      setup: {
        model: "models/gemini-2.5-flash-native-audio-latest",
        generationConfig: {
          responseModalities: ["AUDIO"],
          speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName } } },
        },
        systemInstruction: {
          parts: [{ text: "You are a text-to-speech engine. Output audio only. Do not include any additional commentary or formatting." }],
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
        data = JSON.parse(event.data);
      }

      if (data.setupComplete) {
        setupDone = true;
        sendPrompt();
        return;
      }

      const parts = data.serverContent?.modelTurn?.parts;
      if (Array.isArray(parts) && current?.audioCtx) {
        for (const part of parts) {
          if (part.inlineData?.mimeType?.startsWith("audio/pcm") && part.inlineData?.data) {
            const pcmData = base64ToInt16Array(part.inlineData.data);
            schedulePlaybackChunk(current.audioCtx, pcmData, checkAllDone);
          }
        }
      }

      if (data.serverContent?.turnComplete) {
        turnComplete = true;
        checkAllDone();
      }
    } catch (err) {
      opts.onError?.(err);
      stopCurrent();
    }
  };

  ws.onerror = (err) => {
    opts.onError?.(err);
    stopCurrent();
  };

  ws.onclose = () => {
    triggerDone();
  };

  return { stop: () => { triggerDone(); } };
}
