// Syllabus-based data structure types

export interface ExamBoard {
  id: string;
  name: string;
  code: string; // e.g., "Cambridge", "Edexcel"
}

export interface Subject {
  id: string;
  name: string;
  code: string; // e.g., "0625", "0580"
  examBoard: ExamBoard;
  displayName: string; // e.g., "Physics – Cambridge IGCSE (0625)"
}

export interface SyllabusObjective {
  id: string;
  subjectId: string;
  code: string; // e.g., "1.1", "2.3.1"
  title: string;
  description: string;
  order: number;
  parentId?: string; // For nested objectives
  subObjectives?: SyllabusObjective[];
}

export interface Note {
  id: string;
  objectiveId: string;
  title: string;
  content: string; // Markdown formatted
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface SyllabusData {
  subject: Subject;
  objectives: SyllabusObjective[];
  notes: Note[];
}
