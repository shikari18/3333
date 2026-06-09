import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { z } from "zod";
import { BookOpen, ArrowRight, Zap, Trophy, FileText } from "lucide-react";
import { useProfile } from "@/lib/profile-context";
import { getChaptersForSubject } from "@/data/notes/index";

export const Route = createFileRoute("/notes")({
  validateSearch: (search) =>
    z.object({ subject: z.string().optional() }).parse(search),
  head: () => ({ meta: [{ title: "Revision Notes — ExamGlow" }] }),
  component: NotesIndex,
});

const SUBJECTS = [
  {
    name: "Biology",
    emoji: "🧬",
    color: "from-emerald-500 to-teal-400",
    bg: "bg-emerald-50 border-emerald-200",
    text: "text-emerald-700",
    desc: "Cells, genetics, ecology, photosynthesis, and more",
  },
  {
    name: "Chemistry",
    emoji: "⚗️",
    color: "from-blue-500 to-indigo-400",
    bg: "bg-blue-50 border-blue-200",
    text: "text-blue-700",
    desc: "Atomic structure, bonding, organic chemistry, electrolysis",
  },
  {
    name: "Physics",
    emoji: "⚡",
    color: "from-amber-500 to-orange-400",
    bg: "bg-amber-50 border-amber-200",
    text: "text-amber-700",
    desc: "Forces, waves, electricity, thermal physics, radioactivity",
  },
  {
    name: "Mathematics",
    emoji: "📐",
    color: "from-violet-500 to-purple-400",
    bg: "bg-violet-50 border-violet-200",
    text: "text-violet-700",
    desc: "Algebra, geometry, statistics, trigonometry, sequences",
  },
  {
    name: "Geography",
    emoji: "🌍",
    color: "from-teal-500 to-cyan-400",
    bg: "bg-teal-50 border-teal-200",
    text: "text-teal-700",
    desc: "Natural hazards, rivers, coasts, population, ecosystems",
  },
  {
    name: "English",
    emoji: "📖",
    color: "from-orange-500 to-red-400",
    bg: "bg-orange-50 border-orange-200",
    text: "text-orange-700",
    desc: "Language analysis, writing techniques, literature",
  },
  {
    name: "ICT/CS",
    emoji: "💻",
    color: "from-pink-500 to-rose-400",
    bg: "bg-pink-50 border-pink-200",
    text: "text-pink-700",
    desc: "Hardware, networking, programming, cybersecurity",
  },
];

function NotesIndex() {
  const { enrolledSubjects } = useProfile();
  const { subject: preselected } = Route.useSearch();
  const navigate = useNavigate();

  // If a subject is pre-selected via ?subject=, redirect to the new route
  if (preselected) {
    navigate({ to: "/subject-notes/$subject" as any, params: { subject: preselected } as any, replace: true });
    return null;
  }

  const mySubjects = enrolledSubjects.length > 0
    ? SUBJECTS.filter((s) => enrolledSubjects.includes(s.name))
    : SUBJECTS;
  const otherSubjects = SUBJECTS.filter((s) => !mySubjects.includes(s));

  return (
    <div className="min-h-screen flex flex-col">
      <Header authed />

      <section className="bg-pink-soft text-center py-14 px-6">
        <span className="inline-block px-3 py-1 rounded-full bg-white text-xs font-semibold text-primary mb-3">
          Revision Notes
        </span>
        <h1 className="font-display text-4xl">Choose Your Subject</h1>
        <p className="text-foreground/70 mt-2 max-w-xl mx-auto">
          PMT-style structured notes with diagrams, definitions, exam tips, and worked examples.
        </p>
      </section>

      <main className="max-w-5xl mx-auto w-full px-6 py-10 flex-1">
        {/* My subjects */}
        {mySubjects.length > 0 && (
          <>
            <h2 className="font-bold text-sm text-foreground/50 uppercase tracking-wider mb-4">
              {enrolledSubjects.length > 0 ? "My Subjects" : "All Subjects"}
            </h2>
            <div className="grid md:grid-cols-2 gap-4 mb-10">
              {mySubjects.map((s) => {
                const chapters = getChaptersForSubject(s.name);
                return (
                  <Link
                    key={s.name}
                    to="/subject-notes/$subject"
                    params={{ subject: s.name }}
                    className={`group border rounded-2xl overflow-hidden hover:shadow-md transition-all ${s.bg}`}
                  >
                    <div className={`h-1.5 bg-gradient-to-r ${s.color}`} />
                    <div className="p-5 flex items-start gap-4">
                      <span className="text-3xl">{s.emoji}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className={`font-bold text-lg ${s.text}`}>{s.name}</h3>
                          <ArrowRight className={`w-4 h-4 ${s.text} opacity-0 group-hover:opacity-100 transition-opacity`} />
                        </div>
                        <p className="text-sm text-foreground/60 mt-0.5">{s.desc}</p>
                        <div className="flex gap-3 mt-3 text-xs text-foreground/50">
                          <span className="flex items-center gap-1">
                            <BookOpen className="w-3 h-3" />
                            {chapters.length > 0
                              ? `${chapters.length} chapter${chapters.length !== 1 ? "s" : ""}`
                              : "Notes available"}
                          </span>
                          {chapters.length > 0 && (
                            <span>{chapters.reduce((a, c) => a + c.pages.length, 0)} pages</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </>
        )}

        {/* Other subjects */}
        {otherSubjects.length > 0 && enrolledSubjects.length > 0 && (
          <>
            <h2 className="font-bold text-sm text-foreground/50 uppercase tracking-wider mb-4">Other Subjects</h2>
            <div className="grid md:grid-cols-3 gap-3">
              {otherSubjects.map((s) => (
                <Link
                  key={s.name}
                  to="/subject-notes/$subject"
                  params={{ subject: s.name }}
                  className="group border border-border rounded-xl p-4 hover:border-primary/40 hover:bg-pink-soft/20 transition-all flex items-center gap-3"
                >
                  <span className="text-2xl">{s.emoji}</span>
                  <div>
                    <p className="font-semibold text-sm">{s.name}</p>
                    <p className="text-xs text-foreground/50 mt-0.5 line-clamp-1">{s.desc}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-foreground/30 group-hover:text-primary ml-auto transition-colors" />
                </Link>
              ))}
            </div>
          </>
        )}

        {/* Bottom CTA */}
        <div className="mt-12 bg-lavender-soft rounded-2xl p-8 grid md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2">
            <h3 className="font-display text-2xl text-lavender">Reinforce what you've learned</h3>
            <p className="text-sm text-foreground/70 mt-2">
              After reading your notes, test yourself with flashcards and quizzes to lock in the knowledge.
            </p>
            <div className="flex gap-3 mt-4 flex-wrap">
              <Link to="/flashcards" className="flex items-center gap-2 px-4 py-2 rounded-full bg-lavender text-white text-sm font-semibold">
                <Zap className="w-4 h-4" /> Flashcards
              </Link>
              <Link to="/quizzes" className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-lavender/30 text-lavender text-sm font-semibold">
                <Trophy className="w-4 h-4" /> Quizzes
              </Link>
              <Link to="/past-papers" className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border text-sm font-semibold">
                <FileText className="w-4 h-4" /> Past Papers
              </Link>
            </div>
          </div>
          <div className="text-6xl text-center hidden md:block">📚</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
