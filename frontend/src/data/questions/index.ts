import { TopicQuestion } from "@/types/content";
import { biologyQuestions } from "./biology-0610";
import { chemistryQuestions } from "./chemistry-0620";
import { physicsQuestions } from "./physics-0625";
import { mathsQuestions } from "./mathematics-0580";

const allQuestions: Record<string, TopicQuestion[]> = {
  "biology-0610": biologyQuestions,
  "chemistry-0620": chemistryQuestions,
  "physics-0625": physicsQuestions,
  "mathematics-0580": mathsQuestions,
};

export function getQuestionsForObjective(
  subjectId: string,
  objectiveId: string,
): TopicQuestion[] {
  return (allQuestions[subjectId] ?? []).filter(
    (q) => q.objectiveId === objectiveId,
  );
}

export function getQuestionsForSubject(subjectId: string): TopicQuestion[] {
  return allQuestions[subjectId] ?? [];
}
