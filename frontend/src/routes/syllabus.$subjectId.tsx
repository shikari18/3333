import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getSyllabusData } from "@/data/syllabus";
import { useSyllabusProgress } from "@/hooks/useSyllabusProgress";
import { ArrowLeft, Trophy, BookOpen, HelpCircle, CheckCircle2, Circle } from "lucide-react";
import { getQuestionsForObjective } from "@/data/questions";
import { getNoteForObjective } from "@/data/topicNotes";
import { useState } from "react";
import { SyllabusObjective } from "@/types/syllabus";

export const Route = createFileRoute("/syllabus/$subjectId")({
  component: SyllabusPage,
});

const SUBJECT_COLOURS: Record<string, { from: string; accent: string }> = {
  "biology-0610":   { from: "from-emerald-500 to-teal-400",    accent: "text-emerald-600 bg-emerald-50 border-emerald-200" },
  "chemistry-0620": { from: "from-blue-500 to-indigo-400",      accent: "text-blue-600 bg-blue-50 border-blue-200" },
  "physics-0625":   { from: "from-amber-500 to-orange-400",     accent: "text-amber-600 bg-amber-50 border-amber-200" },
  "mathematics-0580":{ from: "from-violet-500 to-purple-400",   accent: "text-violet-600 bg-violet-50 border-violet-200" },
};

function ObjectiveRow({
  objective,
  subjectId,
}: {
  objective: SyllabusObjective;
  subjectId: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const { toggleObjective, isComplete } = useSyllabusProgress(subjectId);
  const colours = SUBJECT_COLOURS[subjectId] ?? { from: "from-primary to-purple-500", accent: "text-primary bg-pink-soft border-primary/20" };

  return (
    <div className="rounded-xl border border-border bg-white overflow-hidden">
      {/* Parent objective header */}
      <button
        onClick={() => setExpanded((e) => !e)}
        className="w-full flex items-center gap-3 px-5 py-4 hover:bg-muted/40 transition-colors text-left"
      >
        <span className="bg-primary/10 text-primary px-2.5 py-1 rounded-lg text-sm font-bold shrink-0">
          {objective.code}
        </span>
        <div className="flex-1 min-w-0">
          <p className="font-semibold">{objective.title}</p>
          <p className="text-xs text-foreground/60 mt-0.5">{objective.description}</p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {objective.subObjectives && objective.subObjectives.length > 0 && (
            <span className="text-xs text-foreground/40">
              {objective.subObjectives.filter((s) => isComplete(s.id)).length}/{objective.subObjectives.length}
            </span>
          )}
          <span className={`text-foreground/40 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}>
            ▾
          </span>
        </div>
      </button>

      {/* Sub-objectives */}
      {expanded && objective.subObjectives && objective.subObjectives.length > 0 && (
        <div className="border-t border-border bg-muted/20 p-3 space-y-2">
          {objective.subObjectives.map((sub) => {
            const done = isComplete(sub.id);
            const hasQuestions = getQuestionsForObjective(subjectId, sub.id).length > 0;
            const hasNote = !!getNoteForObjective(subjectId, sub.id);

            return (
              <div
                key={sub.id}
                className={`flex items-start gap-3 p-3 rounded-xl border transition-colors ${
                  done ? "bg-emerald-50 border-emerald-200" : "bg-white border-border"
                }`}
              >
                {/* Completion toggle */}
                <button
                  onClick={() => toggleObjective(sub.id)}
                  className="mt-0.5 shrink-0"
                  title={done ? "Mark incomplete" : "Mark complete"}
                >
                  {done ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  ) : (
                    <Circle className="w-5 h-5 text-foreground/30 hover:text-primary transition-colors" />
                  )}
                </button>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-md border ${colours.accent}`}>
                      {sub.code}
                    </span>
                    <p className={`font-semibold text-sm ${done ? "line-through text-foreground/50" : ""}`}>
                      {sub.title}
                    </p>
                  </div>
                  <p className="text-xs text-foreground/60 mt-0.5">{sub.description}</p>

                  {/* Action buttons */}
                  <div className="flex gap-2 mt-2 flex-wrap">
                    {hasNote && (
                      <Link
                        to="/topic-notes/$subjectId/$objectiveId"
                        params={{ subjectId, objectiveId: sub.id }}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-soft/60 text-primary text-xs font-semibold hover:bg-pink-soft transition-colors"
                      >
                        <BookOpen className="w-3 h-3" />
                        Revision Notes
                      </Link>
                    )}
                    {hasQuestions && (
                      <Link
                        to="/practice/$subjectId/$objectiveId"
                        params={{ subjectId, objectiveId: sub.id }}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lavender-soft/60 text-lavender text-xs font-semibold hover:bg-lavender-soft transition-colors"
                      >
                        <HelpCircle className="w-3 h-3" />
                        Practice Questions
                      </Link>
                    )}
                    {!hasNote && !hasQuestions && (
                      <span className="text-xs text-foreground/40 italic">Content coming soon</span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function SyllabusPage() {
  const { subjectId } = Route.useParams();
  const syllabusData = getSyllabusData(subjectId);
  const { progress, isComplete } = useSyllabusProgress(subjectId);
  const colours = SUBJECT_COLOURS[subjectId] ?? { from: "from-primary to-purple-500", accent: "" };

  if (!syllabusData) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header authed />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-2xl font-bold">Subject Not Found</h1>
            <p className="text-foreground/60 mt-2">
              The syllabus you're looking for doesn't exist.
            </p>
            <Link
              to="/home"
              className="inline-flex items-center gap-2 mt-4 text-primary font-semibold"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const { subject, objectives } = syllabusData;
  const allSubObjectives = objectives.flatMap((o) => o.subObjectives ?? []);
  const completedCount = allSubObjectives.filter((s) => isComplete(s.id)).length;

  return (
    <div className="min-h-screen flex flex-col">
      <Header authed />

      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-8">
        <Link
          to="/home"
          className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-primary mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Subject hero + progress */}
        <div className={`rounded-2xl bg-gradient-to-r ${colours.from} text-white p-6 mb-6`}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-white/70 text-xs font-medium uppercase tracking-wide mb-1">
                {subject.examBoard.name} IGCSE ({subject.code})
              </p>
              <h1 className="font-display text-3xl font-bold">{subject.name}</h1>
              <p className="text-white/75 text-sm mt-1">
                {completedCount} of {allSubObjectives.length} topics completed
              </p>
            </div>
            {progress === 100 && (
              <Trophy className="w-10 h-10 text-yellow-200 shrink-0" />
            )}
          </div>

          {/* Progress bar */}
          <div className="mt-5">
            <div className="flex justify-between text-xs text-white/70 mb-1.5">
              <span>Progress</span>
              <span className="font-bold text-white">{progress}%</span>
            </div>
            <div className="h-2.5 bg-white/25 rounded-full overflow-hidden">
              <div
                className="h-full bg-white rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Quick stats */}
          <div className="mt-4 flex gap-3 flex-wrap">
            {objectives.map((obj) => {
              const subObjs = obj.subObjectives ?? [];
              const done = subObjs.filter((s) => isComplete(s.id)).length;
              return (
                <span key={obj.id} className="text-xs bg-white/20 px-2.5 py-1 rounded-full">
                  {obj.code}. {obj.title.split(" ").slice(0, 3).join(" ")}… {done}/{subObjs.length}
                </span>
              );
            })}
          </div>
        </div>

        {/* Objectives list */}
        <div className="space-y-3">
          {objectives.map((objective) => (
            <ObjectiveRow
              key={objective.id}
              objective={objective}
              subjectId={subjectId}
            />
          ))}
        </div>

        {/* Bottom encouragement */}
        {progress > 0 && progress < 100 && (
          <div className="mt-8 rounded-2xl border border-border bg-muted/30 p-5 text-center text-sm text-foreground/60">
            Keep going — you're <span className="font-semibold text-primary">{progress}%</span> through the syllabus! 🎉
          </div>
        )}
        {progress === 100 && (
          <div className="mt-8 rounded-2xl bg-emerald-50 border border-emerald-200 p-5 text-center text-sm text-emerald-700">
            <Trophy className="w-6 h-6 mx-auto mb-2 text-emerald-500" />
            <p className="font-bold">Syllabus complete!</p>
            <p className="mt-1">You've covered every topic in {subject.name}. Time for past papers!</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
