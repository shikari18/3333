import { TopicNote } from "@/types/content";
import { biologyTopicNotes } from "./biology-0610";
import { chemistryTopicNotes } from "./chemistry-0620";
import { physicsTopicNotes } from "./physics-0625";
import { mathsTopicNotes } from "./mathematics-0580";

const allTopicNotes: Record<string, TopicNote[]> = {
  "biology-0610": biologyTopicNotes,
  "chemistry-0620": chemistryTopicNotes,
  "physics-0625": physicsTopicNotes,
  "mathematics-0580": mathsTopicNotes,
};

export function getNoteForObjective(
  subjectId: string,
  objectiveId: string,
): TopicNote | undefined {
  return (allTopicNotes[subjectId] ?? []).find(
    (n) => n.objectiveId === objectiveId,
  );
}

export function getNotesForSubject(subjectId: string): TopicNote[] {
  return allTopicNotes[subjectId] ?? [];
}
