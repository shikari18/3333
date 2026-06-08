import type { NoteChapter } from "./types";

// Biology
import { biologyCellsNotes } from "./biology-cells";
import { biologyPhotosynthesisNotes } from "./biology-photosynthesis";
import { biologyGeneticsNotes } from "./biology-genetics";
import { biologyNutritionNotes } from "./biology-nutrition";
import { biologyNervousNotes } from "./biology-nervous";
import { biologyEcologyNotes } from "./biology-ecology";

// Chemistry
import { chemistryBondingNotes } from "./chemistry-bonding";
import { chemistryOrganicNotes } from "./chemistry-organic";
import { chemistryRatesNotes } from "./chemistry-rates";
import { chemistryAcidsNotes } from "./chemistry-acids";
import { chemistryElectrolysisNotes } from "./chemistry-electrolysis";

// Physics
import { physicsForcesNotes } from "./physics-forces";
import { physicsElectricityNotes } from "./physics-electricity";
import { physicsWavesNotes } from "./physics-waves";
import { physicsThermalNotes } from "./physics-thermal";
import { physicsSpaceNotes } from "./physics-space";

// Mathematics
import { mathematicsAlgebraNotes } from "./mathematics-algebra";
import { mathematicsGeometryNotes } from "./mathematics-geometry";
import { mathematicsStatisticsNotes } from "./mathematics-statistics";

export type { NoteChapter, NotePage, NoteBlock, BulletItem } from "./types";

export const noteChapters: NoteChapter[] = [
  // Biology — 6 chapters, 30 pages
  biologyCellsNotes,
  biologyPhotosynthesisNotes,
  biologyGeneticsNotes,
  biologyNutritionNotes,
  biologyNervousNotes,
  biologyEcologyNotes,
  // Chemistry — 5 chapters, 20 pages
  chemistryBondingNotes,
  chemistryOrganicNotes,
  chemistryRatesNotes,
  chemistryAcidsNotes,
  chemistryElectrolysisNotes,
  // Physics — 5 chapters, 25 pages
  physicsForcesNotes,
  physicsElectricityNotes,
  physicsWavesNotes,
  physicsThermalNotes,
  physicsSpaceNotes,
  // Mathematics — 3 chapters, 15 pages
  mathematicsAlgebraNotes,
  mathematicsGeometryNotes,
  mathematicsStatisticsNotes,
];

export function getChaptersForSubject(subject: string): NoteChapter[] {
  return noteChapters.filter((c) => c.subject === subject);
}

export function getChapter(subject: string, title: string): NoteChapter | undefined {
  return noteChapters.find((c) => c.subject === subject && c.title === title);
}

export const subjectsWithNotes = [...new Set(noteChapters.map((c) => c.subject))];
