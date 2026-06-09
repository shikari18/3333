import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Search,
  BookOpen,
  FileText,
  Zap,
  Trophy,
  CheckCircle2,
  Sparkles,
  Atom,
  FlaskConical,
  Thermometer,
  Calculator,
} from "lucide-react";
import { useEffect, useRef } from "react";
import { useAuth } from "@/lib/auth-context";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "ExamGlow — Soft IGCSE Revision" }] }),
  component: Home,
});

const subjects = [
  { name: "Biology", topics: 124, Icon: Atom, bg: "bg-pink-soft" },
  { name: "Chemistry", topics: 98, Icon: FlaskConical, bg: "bg-lavender-soft" },
  { name: "Physics", topics: 112, Icon: Thermometer, bg: "bg-background border border-border" },
  { name: "Mathematics", topics: 145, Icon: Calculator, bg: "bg-background border border-border" },
];

const features = [
  {
    tag: "500+ Guides",
    title: "Revision Notes",
    Icon: BookOpen,
    desc: "Clean, organized, Notion-style summaries for all IGCSE core subjects.",
  },
  {
    tag: "15 Years",
    title: "Past Papers",
    Icon: FileText,
    desc: "Sorted by year and topic. Includes official mark schemes and examiner reports.",
  },
  {
    tag: "2k Cards",
    title: "Flashcards",
    Icon: Zap,
    desc: "Master definitions with spaced repetition cards designed for quick recall.",
  },
  {
    tag: "100+ Tests",
    title: "Quizzes",
    Icon: Trophy,
    desc: "Timed mini-tests to identify your weak spots before the actual exam.",
  },
];

function Home() {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!loading && user) {
      navigate({ to: "/home" as any });
    }
  }, [user, loading, navigate]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = searchRef.current?.value?.trim();
    if (q) navigate({ to: "/search" as any, search: { q } as any });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header authed={false} />

      {/* Hero + Search combined so everything is above the fold */}
      <section className="bg-pink-soft flex flex-col min-h-[calc(100vh-4rem)] min-h-[calc(100svh-4rem)]">
        <div className="max-w-7xl mx-auto w-full px-6 pt-6 pb-3 grid md:grid-cols-2 gap-7 items-center flex-1">
          {/* Left */}
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-xs font-semibold text-primary">
              <Sparkles className="w-3 h-3" /> YOUR IGCSE COMPANION
            </span>
            <h1 className="mt-4 font-display text-5xl md:text-[3.25rem] lg:text-6xl leading-[1.02]">
              Study with <span className="accent-italic text-primary">Grace</span>,
              <br />
              Achieve with{" "}
              <span className="accent-italic" style={{ color: "var(--lavender)" }}>
                Ease
              </span>
              .
            </h1>
            <p className="mt-4 text-foreground/70 max-w-md">
              ExamGlow turns overwhelming IGCSE revision into a beautiful, organized journey.
              Access premium notes, papers, and quizzes in one soft-aesthetic space.
            </p>
            <div className="mt-5 flex gap-3">
              <Link
                to="/login"
                className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold"
              >
                Start Learning Free
              </Link>
              <Link
                to="/login"
                className="px-6 py-3 rounded-full bg-white text-foreground font-semibold border border-border"
              >
                Browse Subjects
              </Link>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/40?img=${i + 5}`}
                    className="w-7 h-7 rounded-full border-2 border-white"
                    alt=""
                  />
                ))}
              </div>
              <p className="text-sm text-foreground/70">
                Joined by <span className="font-bold">12,000+</span> top-grade students
              </p>
            </div>
          </div>

          {/* Right — branding card */}
          <div className="relative hidden md:flex justify-end">
            <div className="w-full max-w-[460px] aspect-[16/10] rounded-[2.5rem] bg-lavender-soft/70 border border-border shadow-lg overflow-hidden">
              <img
                src="/exam-glow.png"
                alt="ExamGlow"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Search bar — inside the pink section so it's always visible */}
        <div className="max-w-7xl mx-auto w-full px-6 pb-6">
          <div className="flex justify-center">
            <form onSubmit={handleSearch} className="w-full max-w-3xl bg-white rounded-full shadow-lg border border-border p-2 flex items-center gap-2">
              <Search className="w-4 h-4 ml-4 text-muted-foreground shrink-0" />
              <input
                ref={searchRef}
                className="flex-1 bg-transparent outline-none text-sm py-2 min-w-0"
                placeholder="What topic are you revising today? (e.g. Mitochondria, Algebra, IGCSE 2023)"
              />
              <button
                type="submit"
                className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold shrink-0"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="max-w-7xl mx-auto px-6 py-20 w-full">
        <span
          className="inline-block px-3 py-1 rounded-full bg-lavender-soft text-xs font-semibold"
          style={{ color: "var(--lavender)" }}
        >
          Study Tracks
        </span>
        <div className="flex items-end justify-between mt-3">
          <div>
            <h2 className="font-display text-3xl">Explore Your Subjects</h2>
            <p className="text-foreground/70 mt-2">
              Detailed resources tailored specifically for the latest IGCSE syllabuses.
            </p>
          </div>
          <Link to="/login" className="text-primary text-sm font-semibold">
            View All Subjects ›
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-8">
          {subjects.map((s) => (
            <div key={s.name} className={`${s.bg} rounded-2xl p-7 text-center`}>
              <s.Icon className="w-7 h-7 mx-auto text-foreground/80" />
              <h3 className="font-bold mt-4">{s.name}</h3>
              <p className="text-xs text-foreground/60 mt-1">{s.topics} Revision Topics</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-muted/40 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl">Everything You Need To Ace Exams</h2>
          <p className="text-foreground/70 mt-2 max-w-2xl mx-auto">
            We've compiled all the essential tools into one seamless interface to make your revision
            as effective as possible.
          </p>
          <div className="grid md:grid-cols-4 gap-5 mt-10 text-left">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-6 border border-border">
                <div className="flex items-center justify-between">
                  <f.Icon className="w-5 h-5 text-foreground/70" />
                  <span className="text-[10px] text-foreground/60">{f.tag}</span>
                </div>
                <h3 className="font-bold mt-4">{f.title}</h3>
                <p className="text-xs text-foreground/60 mt-2">{f.desc}</p>
                <p className="text-xs text-primary font-semibold mt-4">Explore Now →</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Progress */}
      <section className="max-w-7xl mx-auto w-full px-6 py-20">
        <div className="bg-pink-soft rounded-3xl p-10 md:p-14 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-display text-4xl leading-tight">
              Track Your
              <br />
              Progress
              <br />
              Every Step of the Way
            </h2>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Daily goal setting for specific topics",
                "Score heatmaps for past paper practice",
                "Confidence tracking for flashcards",
                "Earn badges as you master new skills",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> {t}
                </li>
              ))}
            </ul>
            <Link
              to="/dashboard"
              className="inline-block mt-7 px-5 py-2.5 rounded-full bg-white text-primary text-sm font-semibold border border-pink-soft"
            >
              Go to Student Dashboard
            </Link>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between text-sm">
              <span className="font-semibold">Weekly Goal</span>
              <span className="text-primary font-semibold">85% Complete</span>
            </div>
            <div className="h-2 bg-pink-soft rounded-full mt-2 overflow-hidden">
              <div className="h-full bg-primary" style={{ width: "85%" }} />
            </div>
            <div className="mt-6 space-y-3 text-sm">
              {[
                ["Cell Structure Quiz", "DONE"],
                ["Balancing Equations Notes", "DONE"],
                ["Circular Motion Problems", "IN PROGRESS"],
              ].map(([a, b]) => (
                <div
                  key={a}
                  className="flex justify-between py-2 border-b border-border last:border-0"
                >
                  <span>{a}</span>
                  <span className="text-xs text-foreground/60">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stories */}
      <section className="bg-lavender-soft py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl">Success Stories</h2>
          <p className="text-foreground/70 mt-2">
            Join thousands of students who achieved their target A* grades with ExamGlow.
          </p>
          <div className="grid md:grid-cols-3 gap-5 mt-10 text-left">
            {[
              {
                q: "The flashcards and past paper database are life-savers. I went from a C to an A* in just 3 months of focused study here!",
                n: "Sophia Chen",
                r: "A* in Triple Science",
              },
              {
                q: "ExamGlow makes studying feel less like a chore. The interface is so clean and motivating, I actually look forward to my revision sessions.",
                n: "Liam Roberts",
                r: "9 in Mathematics",
              },
              {
                q: "The Notion-style notes are better than any textbook I've bought. Everything is organized exactly how my brain needs it to be.",
                n: "Amara Okafor",
                r: "Straight A* Candidate",
              },
            ].map((t) => (
              <div key={t.n} className="bg-white rounded-2xl p-6 border border-border">
                <div className="text-primary">★★★★★</div>
                <p className="text-sm mt-3 text-foreground/80">"{t.q}"</p>
                <div className="flex items-center gap-3 mt-5">
                  <img
                    src={`https://i.pravatar.cc/40?u=${t.n}`}
                    className="w-9 h-9 rounded-full"
                    alt=""
                  />
                  <div>
                    <p className="text-sm font-semibold">{t.n}</p>
                    <p className="text-xs text-foreground/60">{t.r}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 py-20 w-full">
        <div className="rounded-3xl bg-gradient-to-br from-pink-soft via-pink-softer to-lavender-soft p-14 text-center">
          <h2 className="font-display text-4xl">Ready to reach your peak?</h2>
          <p className="text-foreground/70 mt-3 max-w-md mx-auto">
            Start your journey towards academic excellence today. It takes less than a minute to
            create your free student profile.
          </p>
          <div className="mt-7 flex gap-3 justify-center">
            <Link
              to="/login"
              className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold"
            >
              Create Free Account
            </Link>
            <button className="px-6 py-3 rounded-full font-semibold">Take a Tour</button>
          </div>
          <p className="text-xs text-foreground/60 mt-4">
            No credit card required. Purely for students, by students.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
