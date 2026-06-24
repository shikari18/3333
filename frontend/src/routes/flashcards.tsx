import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Flame, CheckCircle2, Timer, Shuffle, RotateCcw,
  ChevronLeft, ChevronRight, ThumbsUp, ThumbsDown,
  Loader2, BookOpen, Brain, Calendar, Sparkles,
  ArrowRight, GraduationCap, Beaker, Calculator,
  Globe, Laptop, Palette, Briefcase, Languages, X,
} from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import { getDeckWithCards, getDueCards, updateCardProgress } from "@/api/flashcards";
import { api } from "@/lib/api-client";
import { useAuth } from "@/lib/auth-context";
import { useProfile } from "@/lib/profile-context";
import type { Flashcard } from "@/api/flashcards";
import { IGCSE_SUBJECTS, CATEGORY_META, type IgcseSubject, type SubjectCategory } from "@/data/past-papers/igcse-subjects";

export const Route = createFileRoute("/flashcards")({
  head: () => ({ meta: [{ title: "Flashcards — ExamGlow" }] }),
  component: Flashcards,
});

// ── Groq AI card generator ────────────────────────────────────────────────────
const GROQ_KEY = import.meta.env.VITE_GROQ_API_KEY || "";

async function generateAICards(subject: string, topic: string): Promise<Flashcard[]> {
  if (!GROQ_KEY) throw new Error("No API key");
  const topicStr = topic === "All Topics" ? `all major topics in ${subject}` : `${topic} in ${subject}`;
  const prompt = `Generate exactly 10 IGCSE flashcards for: ${topicStr}.

Return ONLY a valid JSON array (no markdown, no explanation) in this exact format:
[{"front":"Question or term here","back":"Answer or definition here","topic":"${topic === "All Topics" ? subject : topic}"},...]

Requirements:
- Cover key concepts, definitions, and exam-style questions
- Back should be concise (1-3 sentences max)
- Front can be a question OR a key term to define
- Match Cambridge IGCSE ${subject} syllabus level`;

  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${GROQ_KEY}` },
    body: JSON.stringify({
      model: "llama-3.3-70b-versatile",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
      max_tokens: 2000,
    }),
  });
  if (!res.ok) throw new Error("Groq error");
  const data = await res.json();
  const raw = data.choices?.[0]?.message?.content ?? "[]";
  // Extract JSON array from response
  const match = raw.match(/\[[\s\S]*\]/);
  if (!match) throw new Error("Bad JSON");
  const parsed = JSON.parse(match[0]) as any[];
  return parsed.map((c, i) => ({
    id: `ai-${Date.now()}-${i}`,
    front: c.front ?? "",
    back: c.back ?? "",
    topic: c.topic ?? topic,
    image_url: null,
    deck: 0,
    mastered: false,
    due_date: null,
    ease_factor: 2.5,
    interval: 0,
    repetitions: 0,
  }));
}

// ── Subject topics map ────────────────────────────────────────────────────────
const SUBJECT_TOPICS: Record<string, string[]> = {
  "Accounting": ["The Accounting Equation", "Double-Entry Bookkeeping", "Trial Balance", "Income Statement", "Balance Sheet", "Cash Flow", "Depreciation", "Bad Debts", "Bank Reconciliation", "Partnership Accounts"],
  "Biology": ["Cell Structure", "Diffusion & Osmosis", "Photosynthesis", "Respiration", "Enzymes", "Genetics & Inheritance", "Natural Selection", "Ecosystems", "Human Digestive System", "Circulatory System"],
  "Chemistry": ["Atomic Structure", "Bonding", "Acids & Bases", "Rates of Reaction", "Organic Chemistry", "Electrochemistry", "Equilibrium", "Metals & Non-metals", "Periodic Table", "Mole Calculations"],
  "Physics": ["Forces & Motion", "Energy", "Waves", "Electricity", "Magnetism", "Thermal Physics", "Nuclear Physics", "Space Physics", "Pressure", "Light & Optics"],
  "Mathematics": ["Algebra", "Quadratic Equations", "Functions & Graphs", "Trigonometry", "Geometry", "Statistics", "Probability", "Matrices", "Vectors", "Calculus (Extended)"],
  "Computer Science": ["Number Systems", "Data Representation", "Programming", "Algorithms", "Databases", "Networking", "Security", "Software Development", "Hardware", "Boolean Logic"],
  "Economics": ["Supply & Demand", "Market Structures", "National Income", "Inflation", "International Trade", "Development Economics", "Money & Banking", "Government Policy", "Opportunity Cost", "Elasticity"],
  "Business Studies": ["Business Objectives", "Marketing Mix", "Human Resources", "Production", "Finance", "Business Organisation", "Stakeholders", "Market Research", "Pricing Strategies", "Globalisation"],
  "History": ["World War I", "World War II", "Cold War", "League of Nations", "Rise of Dictatorships", "Decolonisation", "The UN", "The USA 1919-41", "Germany 1919-45", "Russia 1905-41"],
  "Geography": ["Population", "Migration", "Urbanisation", "Food Production", "Water Supply", "Energy", "Ecosystems", "River Processes", "Coastal Processes", "Climate Change"],
  "English Language": ["Reading Comprehension", "Summary Writing", "Directed Writing", "Narrative Writing", "Descriptive Writing", "Argumentative Writing", "Language Analysis", "Inference Skills", "Vocabulary", "Grammar"],
};

function getTopicsForSubject(name: string): string[] {
  const key = Object.keys(SUBJECT_TOPICS).find(k => name.toLowerCase().includes(k.toLowerCase()));
  return key ? SUBJECT_TOPICS[key] : ["Key Concepts", "Definitions", "Processes", "Applications", "Exam Questions"];
}

// ── Category icon map ─────────────────────────────────────────────────────────
const CATEGORY_ICON: Record<SubjectCategory, React.ElementType> = {
  sciences: Beaker, mathematics: Calculator, languages: Languages,
  humanities: Globe, business: Briefcase, technology: Laptop,
  arts: Palette, other: GraduationCap,
};

// ── Main Component ────────────────────────────────────────────────────────────
function Flashcards() {
  const { user, loading: authLoading } = useAuth();
  const { enrolledSubjects } = useProfile();
  const navigate = useNavigate();

  // Step machine: "browse" → "topics" → "studying"
  const [step, setStep] = useState<"browse" | "topics" | "studying">("browse");
  const [selectedSubject, setSelectedSubject] = useState<IgcseSubject | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string>("All Topics");
  const [searchQuery, setSearchQuery] = useState("");

  // Generated cards + session state
  const [cards, setCards] = useState<Flashcard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [masteredCount, setMasteredCount] = useState(0);
  const [generating, setGenerating] = useState(false);
  const [genError, setGenError] = useState<string | null>(null);
  const [srsMode, setSrsMode] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [sessionDone, setSessionDone] = useState(false);
  const [results, setResults] = useState({ known: 0, learning: 0 });

  useEffect(() => {
    if (!authLoading && !user) navigate({ to: "/login" as any });
  }, [user, authLoading]);

  // Timer
  useEffect(() => {
    if (step !== "studying" || sessionDone) return;
    const t = setInterval(() => setElapsed(e => e + 1), 1000);
    return () => clearInterval(t);
  }, [step, sessionDone]);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    return `${m.toString().padStart(2, "0")}:${(s % 60).toString().padStart(2, "0")}`;
  };

  const handleGenerate = async () => {
    if (!selectedSubject) return;
    setGenerating(true);
    setGenError(null);
    try {
      const generated = await generateAICards(selectedSubject.name, selectedTopic);
      setCards(generated);
      setCurrentIndex(0);
      setFlipped(false);
      setSessionDone(false);
      setResults({ known: 0, learning: 0 });
      setElapsed(0);
      setMasteredCount(0);
      setStep("studying");
    } catch (e: any) {
      setGenError("Failed to generate cards. Check your API key or try again.");
    } finally {
      setGenerating(false);
    }
  };

  const handleAnswer = (known: boolean) => {
    setResults(r => ({ known: r.known + (known ? 1 : 0), learning: r.learning + (!known ? 1 : 0) }));
    const next = currentIndex + 1;
    if (next >= cards.length) {
      setSessionDone(true);
    } else {
      setCurrentIndex(next);
      setFlipped(false);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setFlipped(false);
    setSessionDone(false);
    setResults({ known: 0, learning: 0 });
    setElapsed(0);
  };

  const handleShuffle = () => {
    setCards(prev => [...prev].sort(() => Math.random() - 0.5));
    setCurrentIndex(0);
    setFlipped(false);
  };

  const filteredSubjects = IGCSE_SUBJECTS.filter(s =>
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.code.includes(searchQuery)
  );

  const enrolledSet = new Set(enrolledSubjects.map(s => s.toLowerCase()));
  const isEnrolled = (s: IgcseSubject) =>
    enrolledSet.has(s.name.toLowerCase()) ||
    enrolledSubjects.some(es => s.name.toLowerCase().includes(es.toLowerCase()));

  if (authLoading) return null;
  const currentCard = cards[currentIndex];
  const progress = cards.length > 0 ? Math.round((currentIndex / cards.length) * 100) : 0;

  // ── SESSION DONE VIEW ─────────────────────────────────────────────────────
  if (sessionDone) {
    const total = results.known + results.learning;
    const pct = total > 0 ? Math.round((results.known / total) * 100) : 0;
    return (
      <div className="min-h-screen flex flex-col">
        <Header authed />
        <main className="max-w-2xl mx-auto w-full px-6 py-16 text-center">
          <div className="text-6xl mb-6">{pct >= 80 ? "🏆" : pct >= 50 ? "📚" : "💪"}</div>
          <h1 className="font-display text-4xl">Session Complete!</h1>
          <p className="text-foreground/60 mt-2">
            {selectedSubject?.name} · {selectedTopic} · {formatTime(elapsed)}
          </p>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="bg-green-50 rounded-2xl p-6">
              <p className="text-3xl font-bold text-green-600">{results.known}</p>
              <p className="text-sm text-green-700 mt-1">Cards Known ✓</p>
            </div>
            <div className="bg-orange-50 rounded-2xl p-6">
              <p className="text-3xl font-bold text-orange-500">{results.learning}</p>
              <p className="text-sm text-orange-600 mt-1">Still Learning</p>
            </div>
          </div>
          <div className="mt-6 h-3 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${pct}%` }} />
          </div>
          <p className="text-sm text-foreground/60 mt-2">{pct}% mastered this session</p>
          <div className="flex gap-3 justify-center mt-8 flex-wrap">
            <button onClick={handleRestart} className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold">
              Retry Cards
            </button>
            <button onClick={() => { setStep("topics"); setSessionDone(false); }} className="px-6 py-3 rounded-full border border-border font-semibold">
              Change Topic
            </button>
            <button onClick={() => { setStep("browse"); setSelectedSubject(null); }} className="px-6 py-3 rounded-full border border-border font-semibold">
              All Subjects
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // ── STUDYING VIEW ─────────────────────────────────────────────────────────
  if (step === "studying" && cards.length > 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header authed />
        <section className="bg-pink-softer/60 px-6 py-6">
          <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-4">
            <div>
              <button onClick={() => setStep("topics")} className="text-xs text-foreground/60 mb-1 hover:text-primary flex items-center gap-1">
                <ChevronLeft className="w-3 h-3" /> {selectedSubject?.name}
              </button>
              <h1 className="font-display text-2xl">{selectedTopic === "All Topics" ? selectedSubject?.name : selectedTopic}</h1>
              <p className="text-sm text-foreground/60 mt-0.5">AI-generated flashcards · {cards.length} cards</p>
            </div>
            <div className="flex gap-3 flex-wrap">
              {[
                { Icon: CheckCircle2, label: "KNOWN", val: `${results.known}/${cards.length}`, color: "text-green-500 bg-green-50" },
                { Icon: Timer, label: "TIME", val: formatTime(elapsed), color: "text-blue-500 bg-blue-50" },
              ].map(s => (
                <div key={s.label} className="bg-white rounded-xl px-4 py-2.5 flex items-center gap-2.5 border border-border">
                  <span className={`w-8 h-8 rounded-full inline-flex items-center justify-center ${s.color}`}>
                    <s.Icon className="w-4 h-4" />
                  </span>
                  <div>
                    <p className="text-[10px] tracking-wider text-foreground/60">{s.label}</p>
                    <p className="font-bold text-sm">{s.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <main className="max-w-4xl mx-auto w-full px-6 py-8">
          {/* Progress */}
          <div className="flex items-center justify-between mb-2 text-xs">
            <span><b>PROGRESS:</b> {currentIndex + 1} / {cards.length}</span>
            <div className="flex gap-2">
              <button onClick={handleShuffle} className="px-3 py-1 rounded-full border text-xs hover:bg-muted/50 flex items-center gap-1">
                <Shuffle className="w-3 h-3" /> Shuffle
              </button>
              <button onClick={handleRestart} className="px-3 py-1 rounded-full border text-xs hover:bg-muted/50 flex items-center gap-1">
                <RotateCcw className="w-3 h-3" /> Restart
              </button>
            </div>
          </div>
          <div className="h-1.5 bg-pink-soft rounded-full overflow-hidden mb-6">
            <div className="h-full bg-primary rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>

          {/* Flip Card */}
          {currentCard && (
            <div>
              <div className="relative cursor-pointer select-none" onClick={() => setFlipped(!flipped)} style={{ perspective: "1000px" }}>
                <div
                  className="relative transition-transform duration-500"
                  style={{ transformStyle: "preserve-3d", transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)", minHeight: "280px" }}
                >
                  <div
                    className="absolute inset-0 bg-pink-softer rounded-3xl p-8 flex flex-col items-center justify-center text-center border border-pink-soft"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <p className="text-xs tracking-widest text-primary uppercase mb-3">{currentCard.topic ?? selectedTopic}</p>
                    <h2 className="font-display text-2xl md:text-3xl leading-snug">{currentCard.front}</h2>
                    <p className="text-xs text-foreground/50 mt-6">Tap to reveal answer</p>
                  </div>
                  <div
                    className="absolute inset-0 bg-lavender-soft rounded-3xl p-8 flex flex-col items-center justify-center text-center border border-lavender/20"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                  >
                    <p className="text-xs tracking-widest text-lavender uppercase mb-3">ANSWER</p>
                    <h2 className="font-display text-xl leading-snug text-foreground">{currentCard.back}</h2>
                  </div>
                </div>
              </div>

              {flipped && (
                <div className="mt-6 flex gap-4 justify-center animate-in fade-in duration-300">
                  <button
                    onClick={() => handleAnswer(false)}
                    className="flex-1 max-w-[180px] py-3 rounded-2xl border-2 border-orange-200 bg-orange-50 text-orange-600 font-semibold flex items-center justify-center gap-2 hover:bg-orange-100 transition-colors"
                  >
                    <ThumbsDown className="w-4 h-4" /> Still Learning
                  </button>
                  <button
                    onClick={() => handleAnswer(true)}
                    className="flex-1 max-w-[180px] py-3 rounded-2xl border-2 border-green-200 bg-green-50 text-green-600 font-semibold flex items-center justify-center gap-2 hover:bg-green-100 transition-colors"
                  >
                    <ThumbsUp className="w-4 h-4" /> Got It!
                  </button>
                </div>
              )}

              {!flipped && (
                <div className="mt-4 flex justify-between">
                  <button
                    onClick={() => { setCurrentIndex(Math.max(0, currentIndex - 1)); setFlipped(false); }}
                    disabled={currentIndex === 0}
                    className="px-4 py-2 rounded-full border border-border text-sm flex items-center gap-1 disabled:opacity-40"
                  >
                    <ChevronLeft className="w-3 h-3" /> Previous
                  </button>
                  <button
                    onClick={() => { setCurrentIndex(Math.min(cards.length - 1, currentIndex + 1)); setFlipped(false); }}
                    disabled={currentIndex === cards.length - 1}
                    className="px-4 py-2 rounded-full border border-border text-sm flex items-center gap-1 disabled:opacity-40"
                  >
                    Next <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              )}
            </div>
          )}
        </main>
        <Footer />
      </div>
    );
  }

  // ── TOPIC PICKER VIEW ────────────────────────────────────────────────────
  if (step === "topics" && selectedSubject) {
    const topics = getTopicsForSubject(selectedSubject.name);
    const meta = CATEGORY_META[selectedSubject.category];
    const Icon = CATEGORY_ICON[selectedSubject.category];
    return (
      <div className="min-h-screen flex flex-col">
        <Header authed />
        <section className="bg-gradient-to-br from-primary/10 via-pink-50 to-violet-50 border-b border-border py-10 px-6">
          <div className="max-w-4xl mx-auto">
            <button onClick={() => setStep("browse")} className="text-xs text-foreground/60 mb-3 hover:text-primary flex items-center gap-1">
              <ChevronLeft className="w-3 h-3" /> All Subjects
            </button>
            <div className="flex items-center gap-4">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 border-2 ${meta.bg}`}>
                <Icon className={`w-7 h-7 ${meta.color}`} />
              </div>
              <div>
                <h1 className="font-display text-3xl font-bold">{selectedSubject.name}</h1>
                <p className="text-sm text-foreground/60 mt-0.5">Pick a topic, or study all at once</p>
              </div>
            </div>
          </div>
        </section>

        <main className="max-w-4xl mx-auto w-full px-6 py-8">
          {genError && (
            <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-sm">{genError}</div>
          )}

          {/* All topics option */}
          <button
            onClick={() => { setSelectedTopic("All Topics"); }}
            className={`w-full text-left p-4 rounded-2xl border-2 mb-4 transition-all ${selectedTopic === "All Topics" ? "border-primary bg-primary/5 shadow-sm" : "border-border hover:border-primary/30 bg-white"}`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-sm">All Topics</p>
                  <p className="text-xs text-foreground/50">Mix of questions from the full syllabus</p>
                </div>
              </div>
              {selectedTopic === "All Topics" && <CheckCircle2 className="w-5 h-5 text-primary" />}
            </div>
          </button>

          <p className="text-xs font-bold text-foreground/40 uppercase tracking-widest mb-3">Or pick a specific topic:</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
            {topics.map(topic => (
              <button
                key={topic}
                onClick={() => setSelectedTopic(topic)}
                className={`text-left p-3.5 rounded-xl border-2 transition-all ${selectedTopic === topic ? "border-primary bg-primary/5 shadow-sm" : "border-border hover:border-primary/30 bg-white"}`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold">{topic}</span>
                  {selectedTopic === topic && <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />}
                </div>
              </button>
            ))}
          </div>

          <div className="sticky bottom-6">
            <button
              onClick={handleGenerate}
              disabled={generating}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-primary to-purple-600 text-white font-bold text-base flex items-center justify-center gap-2 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all disabled:opacity-60"
            >
              {generating ? (
                <><Loader2 className="w-5 h-5 animate-spin" /> Generating 10 flashcards…</>
              ) : (
                <><Sparkles className="w-5 h-5" /> Generate {selectedTopic === "All Topics" ? "Mixed" : selectedTopic} Flashcards</>
              )}
            </button>
            <p className="text-center text-xs text-foreground/40 mt-2">10 AI-generated cards · Cambridge IGCSE level</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // ── SUBJECT BROWSE VIEW ──────────────────────────────────────────────────
  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa]">
      <Header authed />

      <section className="bg-gradient-to-br from-primary/10 via-pink-50 to-violet-50 border-b border-border py-12 px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-3">
          <Brain className="w-3.5 h-3.5" /> AI-Powered Flashcards
        </div>
        <h1 className="font-display text-4xl font-bold text-foreground mt-1">Flashcard Studio</h1>
        <p className="text-foreground/60 mt-2 max-w-md mx-auto text-sm">
          Pick any IGCSE subject, choose a topic, and get 10 AI-generated flashcards in seconds.
        </p>
        <div className="mt-5 max-w-sm mx-auto relative">
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search subjects…"
            className="w-full pl-4 pr-4 py-2.5 rounded-xl bg-white border border-border shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>
      </section>

      <main className="max-w-7xl mx-auto w-full px-4 md:px-6 py-8">
        {/* My subjects quick row */}
        {enrolledSubjects.length > 0 && !searchQuery && (
          <div className="mb-8">
            <p className="text-xs font-bold text-foreground/40 uppercase tracking-widest mb-3">⭐ My Subjects</p>
            <div className="flex gap-2 flex-wrap">
              {IGCSE_SUBJECTS.filter(isEnrolled).slice(0, 6).map(s => {
                const meta = CATEGORY_META[s.category];
                const Icon = CATEGORY_ICON[s.category];
                return (
                  <button
                    key={s.code}
                    onClick={() => { setSelectedSubject(s); setSelectedTopic("All Topics"); setStep("topics"); }}
                    className="flex items-center gap-2 px-3 py-2 bg-white border border-primary/30 rounded-xl hover:bg-primary/5 hover:border-primary/50 transition-all text-sm font-semibold"
                  >
                    <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${meta.bg}`}>
                      <Icon className={`w-3.5 h-3.5 ${meta.color}`} />
                    </div>
                    {s.name}
                    <ArrowRight className="w-3 h-3 text-foreground/30" />
                  </button>
                );
              })}
            </div>
          </div>
        )}

        <p className="text-xs font-bold text-foreground/40 uppercase tracking-widest mb-3">All IGCSE Subjects</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {filteredSubjects.map(subject => {
            const meta = CATEGORY_META[subject.category];
            const Icon = CATEGORY_ICON[subject.category];
            const enrolled = isEnrolled(subject);
            return (
              <button
                key={subject.code}
                onClick={() => { setSelectedSubject(subject); setSelectedTopic("All Topics"); setStep("topics"); }}
                className={`group w-full text-left bg-white border rounded-2xl p-4 hover:shadow-md hover:border-primary/30 transition-all cursor-pointer relative ${enrolled ? "border-primary/40 ring-1 ring-primary/20" : "border-border"}`}
              >
                {enrolled && (
                  <span className="absolute top-2 right-2 text-[9px] font-bold text-primary bg-primary/10 border border-primary/20 rounded-full px-1.5 py-0.5">★ Mine</span>
                )}
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border ${meta.bg}`}>
                    <Icon className={`w-5 h-5 ${meta.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors truncate">{subject.name}</p>
                    <p className="text-[11px] text-foreground/50 mt-0.5">{subject.code} · AI cards</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-foreground/30 group-hover:text-primary flex-shrink-0" />
                </div>
              </button>
            );
          })}
        </div>

        {filteredSubjects.length === 0 && (
          <div className="text-center py-20 text-foreground/40">
            <Brain className="w-12 h-12 mx-auto mb-4 opacity-30" />
            <p className="font-semibold">No subjects found for "{searchQuery}"</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
