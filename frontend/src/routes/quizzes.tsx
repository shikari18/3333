import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Clock, BookOpen, Flag, ChevronLeft, ChevronRight,
  CheckCircle2, XCircle, Trophy, Loader2, Brain,
  Sparkles, ArrowRight, GraduationCap, Beaker,
  Calculator, Globe, Laptop, Palette, Briefcase,
  Languages, ChevronDown, RotateCcw,
} from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { useAuth } from "@/lib/auth-context";
import { useProfile } from "@/lib/profile-context";
import { IGCSE_SUBJECTS, CATEGORY_META, type IgcseSubject, type SubjectCategory } from "@/data/past-papers/igcse-subjects";

export const Route = createFileRoute("/quizzes")({
  head: () => ({ meta: [{ title: "Quiz — ExamGlow" }] }),
  component: Quizzes,
});

// ── Types ─────────────────────────────────────────────────────────────────────
interface AIQuestion {
  id: string;
  question: string;
  options: { A: string; B: string; C: string; D: string };
  answer: "A" | "B" | "C" | "D";
  explanation: string;
  topic: string;
}

// ── Groq AI quiz generator ────────────────────────────────────────────────────
const GROQ_KEY = import.meta.env.VITE_GROQ_API_KEY || "";

async function generateAIQuiz(subject: string, topic: string): Promise<AIQuestion[]> {
  if (!GROQ_KEY) throw new Error("No API key");
  const topicStr = topic === "All Topics" ? `various topics in ${subject}` : `${topic} in ${subject}`;
  const prompt = `Generate exactly 10 Cambridge IGCSE multiple-choice quiz questions about ${topicStr}.

Return ONLY a valid JSON array (no markdown, no extra text) in this exact format:
[{
  "question": "Question text here?",
  "options": {"A": "Option A text", "B": "Option B text", "C": "Option C text", "D": "Option D text"},
  "answer": "A",
  "explanation": "Brief explanation of why A is correct",
  "topic": "${topic === "All Topics" ? subject : topic}"
},...]

Requirements:
- All 4 options must be plausible (no obviously wrong distractors)
- Difficulty should match IGCSE exam standard
- Include a mix of knowledge, application, and analysis questions
- answer field must be exactly one of: "A", "B", "C", or "D"`;

  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${GROQ_KEY}` },
    body: JSON.stringify({
      model: "llama-3.3-70b-versatile",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
      max_tokens: 3000,
    }),
  });
  if (!res.ok) throw new Error("Groq error");
  const data = await res.json();
  const raw = data.choices?.[0]?.message?.content ?? "[]";
  const match = raw.match(/\[[\s\S]*\]/);
  if (!match) throw new Error("Bad JSON");
  const parsed = JSON.parse(match[0]) as any[];
  return parsed.map((q, i) => ({
    id: `ai-${Date.now()}-${i}`,
    question: q.question ?? "",
    options: { A: q.options?.A ?? "", B: q.options?.B ?? "", C: q.options?.C ?? "", D: q.options?.D ?? "" },
    answer: (q.answer ?? "A").toUpperCase() as "A" | "B" | "C" | "D",
    explanation: q.explanation ?? "",
    topic: q.topic ?? topic,
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
function Quizzes() {
  const { user, loading: authLoading } = useAuth();
  const { enrolledSubjects } = useProfile();
  const navigate = useNavigate();

  // Step machine: "browse" → "topics" → "quiz" → "results"
  const [step, setStep] = useState<"browse" | "topics" | "quiz" | "results">("browse");
  const [selectedSubject, setSelectedSubject] = useState<IgcseSubject | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string>("All Topics");
  const [searchQuery, setSearchQuery] = useState("");

  // Quiz state
  const [questions, setQuestions] = useState<AIQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [flagged, setFlagged] = useState<Set<string>>(new Set());
  const [timeLeft, setTimeLeft] = useState(600);
  const [submitted, setSubmitted] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [genError, setGenError] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const startTime = useRef<number>(0);

  useEffect(() => {
    if (!authLoading && !user) navigate({ to: "/login" as any });
  }, [user, authLoading]);

  // Countdown timer
  useEffect(() => {
    if (step !== "quiz" || submitted) return;
    if (timeLeft <= 0) { handleSubmit(); return; }
    const t = setTimeout(() => setTimeLeft(s => s - 1), 1000);
    return () => clearTimeout(t);
  }, [step, timeLeft, submitted]);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    return `${m.toString().padStart(2, "0")}:${(s % 60).toString().padStart(2, "0")}`;
  };

  const handleGenerate = async () => {
    if (!selectedSubject) return;
    setGenerating(true);
    setGenError(null);
    try {
      const qs = await generateAIQuiz(selectedSubject.name, selectedTopic);
      setQuestions(qs);
      setCurrentIndex(0);
      setAnswers({});
      setFlagged(new Set());
      setTimeLeft(600);
      setSubmitted(false);
      startTime.current = Date.now();
      setStep("quiz");
    } catch {
      setGenError("Failed to generate quiz. Check your API key or try again.");
    } finally {
      setGenerating(false);
    }
  };

  const handleAnswer = (option: string) => {
    setAnswers(prev => ({ ...prev, [questions[currentIndex].id]: option }));
    setShowExplanation(false);
  };

  const handleFlag = (id: string) => {
    setFlagged(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setStep("results");
  };

  const score = questions.filter(q => answers[q.id]?.toUpperCase() === q.answer).length;
  const pct = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;

  const enrolledSet = new Set(enrolledSubjects.map(s => s.toLowerCase()));
  const isEnrolled = (s: IgcseSubject) =>
    enrolledSet.has(s.name.toLowerCase()) ||
    enrolledSubjects.some(es => s.name.toLowerCase().includes(es.toLowerCase()));

  const filteredSubjects = IGCSE_SUBJECTS.filter(s =>
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) || s.code.includes(searchQuery)
  );

  if (authLoading) return null;

  // ── RESULTS VIEW ──────────────────────────────────────────────────────────
  if (step === "results") {
    const emoji = pct >= 80 ? "🏆" : pct >= 60 ? "🎯" : pct >= 40 ? "📚" : "💪";
    return (
      <div className="min-h-screen flex flex-col">
        <Header authed />
        <main className="max-w-3xl mx-auto w-full px-6 py-10">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">{emoji}</div>
            <h1 className="font-display text-4xl">{pct >= 80 ? "Excellent!" : pct >= 60 ? "Good Work!" : "Keep Practising!"}</h1>
            <p className="text-foreground/60 mt-2">{selectedSubject?.name} · {selectedTopic}</p>
            <div className="inline-flex items-center gap-6 mt-6 px-8 py-4 rounded-2xl bg-white border border-border shadow-sm">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">{score}/{questions.length}</p>
                <p className="text-xs text-foreground/50 mt-0.5">Score</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <p className="text-3xl font-bold">{pct}%</p>
                <p className="text-xs text-foreground/50 mt-0.5">Accuracy</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <p className="text-3xl font-bold text-foreground/60">{formatTime(600 - timeLeft)}</p>
                <p className="text-xs text-foreground/50 mt-0.5">Time Taken</p>
              </div>
            </div>
          </div>

          {/* Per-question review */}
          <div className="space-y-4 mb-8">
            {questions.map((q, i) => {
              const userAns = answers[q.id];
              const correct = userAns?.toUpperCase() === q.answer;
              return (
                <div key={q.id} className={`rounded-2xl border p-5 ${correct ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`}>
                  <div className="flex items-start gap-3">
                    {correct ? <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /> : <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />}
                    <div className="flex-1">
                      <p className="font-semibold text-sm">{i + 1}. {q.question}</p>
                      <div className="mt-2 grid grid-cols-1 gap-1">
                        {(["A", "B", "C", "D"] as const).map(opt => (
                          <div
                            key={opt}
                            className={`text-xs px-3 py-1.5 rounded-lg flex items-center gap-2 ${
                              opt === q.answer
                                ? "bg-green-200 text-green-800 font-semibold"
                                : opt === userAns && !correct
                                ? "bg-red-200 text-red-800"
                                : "bg-white/60 text-foreground/60"
                            }`}
                          >
                            <span className="font-bold w-4">{opt}.</span>
                            <span>{q.options[opt]}</span>
                            {opt === q.answer && <CheckCircle2 className="w-3 h-3 ml-auto" />}
                            {opt === userAns && !correct && <XCircle className="w-3 h-3 ml-auto" />}
                          </div>
                        ))}
                      </div>
                      {q.explanation && (
                        <p className="mt-2 text-xs text-foreground/70 italic">💡 {q.explanation}</p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex gap-3 flex-wrap justify-center">
            <button onClick={handleGenerate} disabled={generating} className="px-6 py-3 rounded-full bg-primary text-white font-semibold flex items-center gap-2 disabled:opacity-60">
              {generating ? <Loader2 className="w-4 h-4 animate-spin" /> : <RotateCcw className="w-4 h-4" />}
              Retry New Quiz
            </button>
            <button onClick={() => setStep("topics")} className="px-6 py-3 rounded-full border border-border font-semibold">
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

  // ── ACTIVE QUIZ VIEW ──────────────────────────────────────────────────────
  if (step === "quiz" && questions.length > 0) {
    const q = questions[currentIndex];
    const userAnswer = answers[q.id];
    const isFlagged = flagged.has(q.id);
    const answered = !!userAnswer;
    const allAnswered = questions.every(qt => !!answers[qt.id]);

    return (
      <div className="min-h-screen flex flex-col">
        <Header authed />
        <section className="bg-white border-b border-border px-5 py-3">
          <div className="max-w-5xl mx-auto flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-3">
              <button onClick={() => setStep("topics")} className="text-xs text-foreground/60 hover:text-primary flex items-center gap-1">
                <ChevronLeft className="w-3 h-3" /> Back
              </button>
              <div>
                <p className="font-bold text-sm">{selectedSubject?.name}</p>
                <p className="text-xs text-foreground/50">{selectedTopic} · {questions.length} questions</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className={`flex items-center gap-1.5 text-sm font-bold px-3 py-1.5 rounded-full border ${timeLeft < 60 ? "text-red-600 border-red-200 bg-red-50 animate-pulse" : "text-foreground/70 border-border"}`}>
                <Clock className="w-3.5 h-3.5" /> {formatTime(timeLeft)}
              </div>
              <button
                onClick={handleSubmit}
                disabled={!allAnswered}
                className="px-4 py-2 rounded-full bg-primary text-white text-sm font-bold disabled:opacity-40 hover:bg-primary/90 transition-colors"
              >
                Submit
              </button>
            </div>
          </div>
        </section>

        <div className="flex-1 flex">
          {/* Question navigator sidebar — desktop */}
          <aside className="hidden lg:flex flex-col w-52 border-r border-border p-4 bg-muted/20 gap-1">
            <p className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest mb-2">Questions</p>
            <div className="grid grid-cols-5 gap-1">
              {questions.map((qt, i) => (
                <button
                  key={qt.id}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
                    i === currentIndex
                      ? "bg-primary text-white"
                      : answers[qt.id]
                      ? "bg-green-100 text-green-700"
                      : flagged.has(qt.id)
                      ? "bg-amber-100 text-amber-700"
                      : "bg-white border border-border text-foreground/60"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <div className="mt-4 space-y-1.5 text-[10px]">
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded bg-green-100 border border-green-200" /><span>Answered</span></div>
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded bg-amber-100 border border-amber-200" /><span>Flagged</span></div>
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded bg-white border border-border" /><span>Unanswered</span></div>
            </div>
          </aside>

          {/* Main question area */}
          <main className="flex-1 px-5 py-8 max-w-3xl mx-auto w-full">
            {/* Progress bar */}
            <div className="mb-6">
              <div className="flex justify-between text-xs mb-1.5">
                <span className="font-semibold">Question {currentIndex + 1} of {questions.length}</span>
                <span className="text-foreground/50">{Object.keys(answers).length} answered</span>
              </div>
              <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }} />
              </div>
            </div>

            {/* Question */}
            <div className="bg-white border border-border rounded-2xl p-6 mb-5 shadow-sm">
              <div className="flex items-start justify-between gap-3 mb-4">
                <p className="font-semibold text-base leading-relaxed flex-1">{q.question}</p>
                <button
                  onClick={() => handleFlag(q.id)}
                  className={`flex-shrink-0 p-2 rounded-xl transition-colors ${isFlagged ? "bg-amber-100 text-amber-600" : "hover:bg-muted text-foreground/30"}`}
                  title="Flag for review"
                >
                  <Flag className="w-4 h-4" />
                </button>
              </div>
              <p className="text-[10px] text-foreground/40 uppercase tracking-widest">{q.topic}</p>
            </div>

            {/* Options */}
            <div className="space-y-2.5 mb-6">
              {(["A", "B", "C", "D"] as const).map(opt => (
                <button
                  key={opt}
                  onClick={() => handleAnswer(opt)}
                  className={`w-full text-left p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-center gap-3 ${
                    userAnswer === opt
                      ? "border-primary bg-primary/5 shadow-sm"
                      : "border-border bg-white hover:border-primary/30 hover:bg-muted/20"
                  }`}
                >
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 border-2 transition-colors ${
                    userAnswer === opt ? "border-primary bg-primary text-white" : "border-border text-foreground/50"
                  }`}>
                    {opt}
                  </span>
                  <span className="text-sm">{q.options[opt]}</span>
                </button>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
                disabled={currentIndex === 0}
                className="px-4 py-2 rounded-full border border-border text-sm flex items-center gap-1 disabled:opacity-40 hover:bg-muted/50"
              >
                <ChevronLeft className="w-3 h-3" /> Previous
              </button>
              {currentIndex < questions.length - 1 ? (
                <button
                  onClick={() => setCurrentIndex(currentIndex + 1)}
                  className="px-4 py-2 rounded-full bg-primary text-white text-sm flex items-center gap-1"
                >
                  Next <ChevronRight className="w-3 h-3" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="px-5 py-2 rounded-full bg-green-600 text-white text-sm font-bold hover:bg-green-700 flex items-center gap-1"
                >
                  <CheckCircle2 className="w-4 h-4" /> Finish Quiz
                </button>
              )}
            </div>
          </main>
        </div>
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
                <p className="text-sm text-foreground/60 mt-0.5">Pick a topic, or test all at once</p>
              </div>
            </div>
          </div>
        </section>

        <main className="max-w-4xl mx-auto w-full px-6 py-8">
          {genError && (
            <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-sm">{genError}</div>
          )}

          <button
            onClick={() => setSelectedTopic("All Topics")}
            className={`w-full text-left p-4 rounded-2xl border-2 mb-4 transition-all ${selectedTopic === "All Topics" ? "border-primary bg-primary/5 shadow-sm" : "border-border hover:border-primary/30 bg-white"}`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-sm">All Topics</p>
                  <p className="text-xs text-foreground/50">Mixed questions across the full syllabus</p>
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
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-primary to-purple-600 text-white font-bold text-base flex items-center justify-center gap-2 shadow-lg shadow-primary/30 hover:shadow-xl transition-all disabled:opacity-60"
            >
              {generating ? (
                <><Loader2 className="w-5 h-5 animate-spin" /> Generating 10 questions…</>
              ) : (
                <><Sparkles className="w-5 h-5" /> Start {selectedTopic === "All Topics" ? "Mixed" : selectedTopic} Quiz</>
              )}
            </button>
            <p className="text-center text-xs text-foreground/40 mt-2">10 AI-generated MCQ questions · 10 minute timer</p>
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
          <Trophy className="w-3.5 h-3.5" /> AI-Powered Quizzes
        </div>
        <h1 className="font-display text-4xl font-bold text-foreground mt-1">Practice Quizzes</h1>
        <p className="text-foreground/60 mt-2 max-w-md mx-auto text-sm">
          Pick any IGCSE subject, choose a topic, and get 10 AI-generated MCQ questions with a 10-minute timer.
        </p>
        <div className="mt-5 max-w-sm mx-auto">
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
                    <p className="text-[11px] text-foreground/50 mt-0.5">{subject.code} · AI quiz</p>
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
