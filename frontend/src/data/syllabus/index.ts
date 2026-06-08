import { physics0625Data } from "./physics-0625";
import { mathematics0580Data } from "./mathematics-0580";
import { chemistry0620Data } from "./chemistry-0620";
import { biology0610Data } from "./biology-0610";
import { SyllabusData } from "@/types/syllabus";

export const syllabusData: Record<string, SyllabusData> = {
  "physics-0625": physics0625Data,
  "mathematics-0580": mathematics0580Data,
  "chemistry-0620": chemistry0620Data,
  "biology-0610": biology0610Data,
};

export function getSyllabusData(subjectId: string): SyllabusData | undefined {
  return syllabusData[subjectId];
}

export function getAllSubjects() {
  return Object.values(syllabusData).map(data => data.subject);
}
