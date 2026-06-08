export type Difficulty = "Easy" | "Medium" | "Hard";

export interface WorkedSolution {
  steps: string[];
  markSchemePoints: string[];
  examTip?: string;
}

export interface TopicQuestion {
  id: string;
  objectiveId: string;
  subjectId: string;
  difficulty: Difficulty;
  question: string;
  marks: number;
  workedSolution: WorkedSolution;
}

export interface RelatedTopic {
  label: string;
  subjectId: string;
  objectiveId: string;
}

export type NoteSection =
  | { kind: "paragraph"; heading: string; text: string }
  | { kind: "bullets"; heading: string; bullets: string[] }
  | { kind: "definition"; term: string; definition: string }
  | { kind: "table"; heading: string; headers: string[]; rows: string[][] }
  | { kind: "image"; src: string; alt: string; caption?: string };

export interface TopicNote {
  id: string;
  objectiveId: string;
  subjectId: string;
  title: string;
  keyPoints: string[];
  content: NoteSection[];
  examTips: string[];
  commonMistakes: string[];
  relatedTopics?: RelatedTopic[];
}
