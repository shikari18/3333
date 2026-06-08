import { SyllabusObjective } from "@/types/syllabus";
import { ChevronDown, ChevronRight, BookOpen } from "lucide-react";
import { useState } from "react";

interface SyllabusObjectiveListProps {
  objectives: SyllabusObjective[];
  subjectName: string;
  examBoard: string;
  subjectCode: string;
}

export function SyllabusObjectiveList({ objectives, subjectName, examBoard, subjectCode }: SyllabusObjectiveListProps) {
  const [expandedObjectives, setExpandedObjectives] = useState<Set<string>>(new Set());

  const toggleObjective = (id: string) => {
    setExpandedObjectives(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="space-y-4">
      {/* Subject Header */}
      <div className="bg-gradient-to-r from-primary to-purple-600 text-white rounded-2xl p-6">
        <h1 className="font-display text-3xl font-bold">{subjectName}</h1>
        <p className="text-white/80 mt-1">{examBoard} IGCSE ({subjectCode})</p>
      </div>

      {/* Objectives */}
      <div className="space-y-3">
        {objectives.map((objective) => (
          <div key={objective.id} className="bg-white rounded-xl border border-border overflow-hidden">
            {/* Main Objective */}
            <button
              onClick={() => toggleObjective(objective.id)}
              className="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors text-left"
            >
              <div className="flex items-center gap-3">
                <span className="bg-primary/10 text-primary px-2 py-1 rounded-md text-sm font-semibold">
                  {objective.code}
                </span>
                <div>
                  <h3 className="font-semibold">{objective.title}</h3>
                  <p className="text-sm text-foreground/60">{objective.description}</p>
                </div>
              </div>
              {expandedObjectives.has(objective.id) ? (
                <ChevronDown className="w-5 h-5 text-foreground/60" />
              ) : (
                <ChevronRight className="w-5 h-5 text-foreground/60" />
              )}
            </button>

            {/* Sub-objectives */}
            {expandedObjectives.has(objective.id) && objective.subObjectives && (
              <div className="border-t border-border bg-muted/30 p-4 space-y-2">
                {objective.subObjectives.map((subObj) => (
                  <div
                    key={subObj.id}
                    className="flex items-start gap-3 p-3 bg-white rounded-lg border border-border"
                  >
                    <span className="bg-lavender-soft text-lavender px-2 py-1 rounded-md text-xs font-semibold shrink-0">
                      {subObj.code}
                    </span>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm">{subObj.title}</h4>
                      <p className="text-xs text-foreground/60 mt-1">{subObj.description}</p>
                      <button className="mt-2 flex items-center gap-1 text-xs text-primary font-semibold hover:underline">
                        <BookOpen className="w-3 h-3" />
                        View Notes
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
