import { useEffect, useRef, useState } from "react";
import {
  X,
  Send,
  Mic,
  MicOff,
  User,
  Volume2,
  VolumeX,
  Plus,
  History,
} from "lucide-react";

interface Message {
  role: "user" | "assistant";
  text: string;
}

interface ChatSession {
  id: string;
  title: string;
  createdAt: number;
  messages: Message[];
}

const SUGGESTIONS = [
  "Explain photosynthesis",
  "Help me with quadratic equations",
  "What is Newton's 3rd law?",
  "Summarise the carbon cycle",
];

const STORAGE_KEY = "examglow_ai_history_v1";
const INITIAL_MESSAGE: Message = {
  role: "assistant",
  text: "Hi! I'm your ExamGlow AI tutor 🌸 I'm here to help you truly understand your IGCSE subjects. Ask me anything — I'll explain concepts step-by-step, give you fresh examples, and make sure you really get it!",
};

export function AiPanel({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [listening, setListening] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [ttsEnabled, setTtsEnabled] = useState(true);
  const [historyOpen, setHistoryOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState<ChatSession[]>([]);
  const [activeChatId, setActiveChatId] = useState<string>(() => crypto.randomUUID());
  const bottomRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as ChatSession[];
      if (Array.isArray(parsed)) setChatHistory(parsed);
    } catch {
      // ignore
    }
  }, []);

  function persistHistory(next: ChatSession[]) {
    setChatHistory(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // ignore
    }
  }

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  function speak(text: string) {
    if (!ttsEnabled) return;
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "en-US";
    window.speechSynthesis.speak(u);
  }

  useEffect(() => {
    // Stop any ongoing voice capture / speech when closing the panel
    if (!open) {
      recognitionRef.current?.stop();
      setListening(false);
      setHistoryOpen(false);
      if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    }
  }, [open]);

  function titleFromMessages(msgs: Message[]) {
    const firstUser = msgs.find((m) => m.role === "user")?.text?.trim();
    if (!firstUser) return "New chat";
    return firstUser.length > 28 ? `${firstUser.slice(0, 28)}…` : firstUser;
  }

  function startNewChat() {
    // Save current chat if it has user content
    const hasUser = messages.some((m) => m.role === "user");
    if (hasUser) {
      const session: ChatSession = {
        id: activeChatId,
        createdAt: Date.now(),
        title: titleFromMessages(messages),
        messages,
      };
      persistHistory([session, ...chatHistory]);
    }
    setActiveChatId(crypto.randomUUID());
    setMessages([INITIAL_MESSAGE]);
    setInput("");
    setIsTyping(false);
    setHistoryOpen(false);
  }

  function openHistory() {
    setHistoryOpen(true);
  }

  function loadChat(session: ChatSession) {
    setActiveChatId(session.id);
    setMessages(session.messages);
    setHistoryOpen(false);
    setInput("");
  }

  // Real AI reply using Groq API
  async function simulateReply(userMsg: string) {
    setIsTyping(true);

    const apiKey = import.meta.env.VITE_GROQ_API_KEY;

    if (!apiKey || apiKey === "your_groq_api_key_here") {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: "AI Tutor is not configured yet. Add your VITE_GROQ_API_KEY to the .env file. Get a free key at console.groq.com/keys" },
      ]);
      setIsTyping(false);
      return;
    }

    try {
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            {
              role: "system",
              content: `You are a helpful IGCSE study assistant for ExamGlow. You act as a real tutor, not just a text retriever.

When answering questions:
1. Understand the student's question deeply
2. Generate fresh, original explanations
3. Break down complex concepts step-by-step
4. Provide new examples to illustrate concepts
5. Be conversational and engaging
6. Use clear, simple language appropriate for IGCSE students (ages 14-16)
7. Encourage the student and build confidence
8. Reference mark-scheme language where relevant

Your goal is to help students truly understand concepts, not just memorize facts. Be patient, encouraging, and adapt your explanations to the student's level.`,
            },
            ...messages.map((m) => ({ role: m.role, content: m.text })),
            { role: "user", content: userMsg },
          ],
          temperature: 0.7,
          max_tokens: 1024,
        }),
      });

      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err?.error?.message ?? `API error ${response.status}`);
      }

      const data = await response.json();
      const reply = data.choices?.[0]?.message?.content ?? "Sorry, I couldn't generate a response.";
      setMessages((prev) => [...prev, { role: "assistant", text: reply }]);
      setIsTyping(false);
      speak(reply);
    } catch (error: any) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: `Error: ${error?.message ?? "Something went wrong. Please try again."}` },
      ]);
      setIsTyping(false);
    }
  }
  function send(text?: string) {
    const msg = (text ?? input).trim();
    if (!msg) return;
    setMessages((prev) => [...prev, { role: "user", text: msg }]);
    setInput("");
    simulateReply(msg);
  }

  function toggleVoice() {
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SR) {
      alert("Voice input is not supported in this browser.");
      return;
    }

    if (listening) {
      recognitionRef.current?.stop();
      setListening(false);
      return;
    }

    const recognition = new SR();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.onresult = (e: any) => {
      const transcript = e.results[0][0].transcript;
      send(transcript);
      setListening(false);
    };
    recognition.onerror = () => setListening(false);
    recognition.onend = () => setListening(false);
    recognitionRef.current = recognition;
    recognition.start();
    setListening(true);
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />

      {/* Slide-up panel — stops just below the nav (top-16 = 64px nav height) */}
      <div
        className={`fixed left-0 right-0 bottom-0 z-50 flex flex-col bg-white rounded-t-3xl shadow-2xl border-t border-border transition-transform duration-400 ease-in-out`}
        style={{
          top: "64px",
          transform: open ? "translateY(0)" : "translateY(100%)",
          pointerEvents: open ? "auto" : "none",
        }}
        aria-hidden={!open}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border shrink-0">
          <div className="flex items-center gap-3">
            <img
              src="/favicon.ico"
              alt="ExamGlow AI"
              className="w-9 h-9 rounded-full object-cover border border-border"
            />
            <div>
              <p className="font-bold text-sm">ExamGlow AI Tutor</p>
              <p className="text-xs text-foreground/60">Your personal IGCSE study assistant</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={startNewChat}
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="New chat"
              title="New chat"
            >
              <Plus className="w-5 h-5" />
            </button>
            <button
              onClick={openHistory}
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Chat history"
              title="Chat history"
            >
              <History className="w-5 h-5" />
            </button>
            <button
              onClick={() => setTtsEnabled((v) => !v)}
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label={ttsEnabled ? "Mute AI voice" : "Unmute AI voice"}
              title={ttsEnabled ? "Mute AI voice" : "Unmute AI voice"}
            >
              {ttsEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Close AI panel"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="relative flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {historyOpen && (
            <div className="absolute inset-0 bg-white z-10 flex flex-col">
              <div className="flex items-center justify-between py-3 border-b border-border">
                <p className="font-bold text-sm">Chat history</p>
                <button
                  onClick={() => setHistoryOpen(false)}
                  className="p-2 rounded-full hover:bg-muted"
                  aria-label="Close history"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="py-3 space-y-2 overflow-y-auto">
                {chatHistory.length === 0 ? (
                  <p className="text-sm text-foreground/60">No previous chats yet.</p>
                ) : (
                  chatHistory.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => loadChat(c)}
                      className="w-full text-left rounded-xl border border-border px-4 py-3 hover:bg-muted/40 transition-colors"
                    >
                      <p className="font-semibold text-sm">{c.title}</p>
                      <p className="text-xs text-foreground/50 mt-0.5">
                        {new Date(c.createdAt).toLocaleString()}
                      </p>
                    </button>
                  ))
                )}
              </div>
            </div>
          )}

          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex gap-3 ${m.role === "user" ? "flex-row-reverse" : "flex-row"}`}
            >
              <div
                className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center ${m.role === "assistant" ? "bg-primary" : "bg-lavender-soft"}`}
              >
                {m.role === "assistant" ? (
                  <img src="/favicon.ico" alt="AI" className="w-8 h-8 rounded-full object-cover" />
                ) : (
                  <User className="w-4 h-4 text-lavender" />
                )}
              </div>
              <div
                className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  m.role === "assistant"
                    ? "bg-pink-softer text-foreground rounded-tl-none"
                    : "bg-primary text-white rounded-tr-none"
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                <img src="/favicon.ico" alt="AI" className="w-8 h-8 rounded-full object-cover" />
              </div>
              <div className="bg-pink-softer rounded-2xl rounded-tl-none px-4 py-3 flex gap-1 items-center">
                <span className="w-2 h-2 bg-primary/50 rounded-full animate-bounce [animation-delay:0ms]" />
                <span className="w-2 h-2 bg-primary/50 rounded-full animate-bounce [animation-delay:150ms]" />
                <span className="w-2 h-2 bg-primary/50 rounded-full animate-bounce [animation-delay:300ms]" />
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Suggestions */}
        {messages.length === 1 && (
          <div className="px-6 pb-2 flex gap-2 flex-wrap shrink-0">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                onClick={() => send(s)}
                className="px-3 py-1.5 rounded-full bg-pink-soft text-primary text-xs font-medium hover:bg-primary hover:text-white transition-colors"
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {/* Input bar */}
        <div className="px-6 py-4 border-t border-border shrink-0">
          <div className="flex items-center gap-3 bg-muted/50 rounded-full px-4 py-2">
            <button
              onClick={toggleVoice}
              className={`p-1.5 rounded-full transition-colors ${listening ? "bg-primary text-white animate-pulse" : "text-foreground/50 hover:text-primary"}`}
              aria-label={listening ? "Stop voice input" : "Start voice input"}
            >
              {listening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
            </button>
            <input
              className="flex-1 bg-transparent outline-none text-sm py-1"
              placeholder={listening ? "Listening…" : "Ask anything about your subjects…"}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
            />
            <button
              onClick={() => send()}
              disabled={!input.trim()}
              className="p-1.5 rounded-full bg-primary text-white disabled:opacity-40 transition-opacity"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
          <p className="text-center text-[10px] text-foreground/40 mt-2">
            ExamGlow AI · Powered by your curiosity 🌸
          </p>
        </div>
      </div>
    </>
  );
}
