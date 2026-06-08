export type PaperDoc = {
  type: "qp" | "ms" | "er";
  label: string;
  url: string;
};

export type PastPaper = {
  subject: string;
  subjectCode: string;
  session: string;
  year: string;
  paperNum: string;
  paperLabel: string;
  variant: string;
  diff: "Core" | "Extended" | "Practical";
  docs: PaperDoc[];
};

// Cambridge IGCSE past papers — direct links to official Cambridge resource bank
// Format: https://pastpapers.papacambridge.com/directories/CAIE/CAIE-IGCSE/{subject}/
// We use the PapaCambridge mirror which hosts official CAIE papers publicly

function caie(subject: string, code: string, year: string, session: string, paper: string, variant: string): PaperDoc[] {
  const s = session === "May/June" ? "s" : session === "Oct/Nov" ? "w" : "m";
  const yy = year.slice(2);
  const base = `https://pastpapers.papacambridge.com/directories/CAIE/CAIE-IGCSE/${subject}/`;
  const prefix = `${code}_${s}${yy}_`;
  return [
    { type: "qp", label: "Question Paper", url: `${base}${prefix}qp_${paper}${variant}.pdf` },
    { type: "ms", label: "Mark Scheme", url: `${base}${prefix}ms_${paper}${variant}.pdf` },
  ];
}

export const allPastPapers: PastPaper[] = [
  // ── BIOLOGY 0610 ──────────────────────────────────────────────────────────
  // 2023
  { subject: "Biology", subjectCode: "0610", session: "May/June", year: "2023", paperNum: "2", variant: "2", paperLabel: "Paper 2 (MCQ Extended)", diff: "Extended", docs: caie("Biology-(0610)", "0610", "2023", "May/June", "2", "2") },
  { subject: "Biology", subjectCode: "0610", session: "May/June", year: "2023", paperNum: "4", variant: "2", paperLabel: "Paper 4 (Theory Extended)", diff: "Extended", docs: caie("Biology-(0610)", "0610", "2023", "May/June", "4", "2") },
  { subject: "Biology", subjectCode: "0610", session: "May/June", year: "2023", paperNum: "6", variant: "2", paperLabel: "Paper 6 (Alt. to Practical)", diff: "Practical", docs: caie("Biology-(0610)", "0610", "2023", "May/June", "6", "2") },
  { subject: "Biology", subjectCode: "0610", session: "Oct/Nov", year: "2023", paperNum: "2", variant: "1", paperLabel: "Paper 2 (MCQ Extended)", diff: "Extended", docs: caie("Biology-(0610)", "0610", "2023", "Oct/Nov", "2", "1") },
  { subject: "Biology", subjectCode: "0610", session: "Oct/Nov", year: "2023", paperNum: "4", variant: "1", paperLabel: "Paper 4 (Theory Extended)", diff: "Extended", docs: caie("Biology-(0610)", "0610", "2023", "Oct/Nov", "4", "1") },
  // 2022
  { subject: "Biology", subjectCode: "0610", session: "May/June", year: "2022", paperNum: "2", variant: "2", paperLabel: "Paper 2 (MCQ Extended)", diff: "Extended", docs: caie("Biology-(0610)", "0610", "2022", "May/June", "2", "2") },
  { subject: "Biology", subjectCode: "0610", session: "May/June", year: "2022", paperNum: "4", variant: "2", paperLabel: "Paper 4 (Theory Extended)", diff: "Extended", docs: caie("Biology-(0610)", "0610", "2022", "May/June", "4", "2") },
  { subject: "Biology", subjectCode: "0610", session: "May/June", year: "2022", paperNum: "6", variant: "2", paperLabel: "Paper 6 (Alt. to Practical)", diff: "Practical", docs: caie("Biology-(0610)", "0610", "2022", "May/June", "6", "2") },
  { subject: "Biology", subjectCode: "0610", session: "Oct/Nov", year: "2022", paperNum: "4", variant: "1", paperLabel: "Paper 4 (Theory Extended)", diff: "Extended", docs: caie("Biology-(0610)", "0610", "2022", "Oct/Nov", "4", "1") },
  // 2021
  { subject: "Biology", subjectCode: "0610", session: "May/June", year: "2021", paperNum: "2", variant: "1", paperLabel: "Paper 2 (MCQ Extended)", diff: "Extended", docs: caie("Biology-(0610)", "0610", "2021", "May/June", "2", "1") },
  { subject: "Biology", subjectCode: "0610", session: "May/June", year: "2021", paperNum: "4", variant: "2", paperLabel: "Paper 4 (Theory Extended)", diff: "Extended", docs: caie("Biology-(0610)", "0610", "2021", "May/June", "4", "2") },
  { subject: "Biology", subjectCode: "0610", session: "Oct/Nov", year: "2021", paperNum: "4", variant: "2", paperLabel: "Paper 4 (Theory Extended)", diff: "Extended", docs: caie("Biology-(0610)", "0610", "2021", "Oct/Nov", "4", "2") },
  // 2020
  { subject: "Biology", subjectCode: "0610", session: "Oct/Nov", year: "2020", paperNum: "4", variant: "1", paperLabel: "Paper 4 (Theory Extended)", diff: "Extended", docs: caie("Biology-(0610)", "0610", "2020", "Oct/Nov", "4", "1") },
  { subject: "Biology", subjectCode: "0610", session: "Oct/Nov", year: "2020", paperNum: "2", variant: "1", paperLabel: "Paper 2 (MCQ Extended)", diff: "Extended", docs: caie("Biology-(0610)", "0610", "2020", "Oct/Nov", "2", "1") },
  // 2019
  { subject: "Biology", subjectCode: "0610", session: "May/June", year: "2019", paperNum: "4", variant: "2", paperLabel: "Paper 4 (Theory Extended)", diff: "Extended", docs: caie("Biology-(0610)", "0610", "2019", "May/June", "4", "2") },
  { subject: "Biology", subjectCode: "0610", session: "Oct/Nov", year: "2019", paperNum: "4", variant: "1", paperLabel: "Paper 4 (Theory Extended)", diff: "Extended", docs: caie("Biology-(0610)", "0610", "2019", "Oct/Nov", "4", "1") },

  // ── CHEMISTRY 0620 ────────────────────────────────────────────────────────
  { subject: "Chemistry", subjectCode: "0620", session: "May/June", year: "2023", paperNum: "2", variant: "2", paperLabel: "Paper 2 (MCQ Extended)", diff: "Extended", docs: caie("Chemistry-(0620)", "0620", "2023", "May/June", "2", "2") },
  { subject: "Chemistry", subjectCode: "0620", session: "May/June", year: "2023", paperNum: "4", variant: "2", paperLabel: "Paper 4 (Theory Extended)", diff: "Extended", docs: caie("Chemistry-(0620)", "0620", "2023", "May/June", "4", "2") },
  { subject: "Chemistry", subjectCode: "0620", session: "May/June", year: "2023", paperNum: "6", variant: "2", paperLabel: "Paper 6 (Alt. to Practical)", diff: "Practical", docs: caie("Chemistry-(0620)", "0620", "2023", "May/June", "6", "2") },
  { subject: "Chemistry", subjectCode: "0620", session: "Oct/Nov", year: "2023", paperNum: "4", variant: "1", paperLabel: "Paper 4 (Theory Extended)", diff: "Extended", docs: caie("Chemistry-(0620)", "0620", "2023", "Oct/Nov", "4", "1") },
  { subject: "Chemistry", subjectCode: "0620", session: "May/June", year: "2022", paperNum: "2", variant: "2", paperLabel: "Paper 2 (MCQ Extended)", diff: "Extended", docs: caie("Chemistry-(0620)", "0620", "2022", "May/June", "2", "2") },
  { subject: "Chemistry", subjectCode: "0620", session: "May/June", year: "2022", paperNum: "4", variant: "1", paperLabel: "Paper 4 (Theory Extended)", diff: "Extended", docs: caie("Chemistry-(0620)", "0620", "2022", "May/June", "4", "1") },
  { subject: "Chemistry", subjectCode: "0620", session: "Oct/Nov", year: "2022", paperNum: "2", variant: "2", paperLabel: "Paper 2 (MCQ Extended)", diff: "Extended", docs: caie("Chemistry-(0620)", "0620", "2022", "Oct/Nov", "2", "2") },
  { subject: "Chemistry", subjectCode: "0620", session: "Oct/Nov", year: "2022", paperNum: "4", variant: "1", paperLabel: "Paper 4 (Theory Extended)", diff: "Extended", docs: caie("Chemistry-(0620)", "0620", "2022", "Oct/Nov", "4", "1") },
  { subject: "Chemistry", subjectCode: "0620", session: "May/June", year: "2021", paperNum: "2", variant: "1", paperLabel: "Paper 2 (MCQ Extended)", diff: "Extended", docs: caie("Chemistry-(0620)", "0620", "2021", "May/June", "2", "1") },
  { subject: "Chemistry", subjectCode: "0620", session: "May/June", year: "2021", paperNum: "4", variant: "2", paperLabel: "Paper 4 (Theory Extended)", diff: "Extended", docs: caie("Chemistry-(0620)", "0620", "2021", "May/June", "4", "2") },
  { subject: "Chemistry", subjectCode: "0620", session: "Oct/Nov", year: "2021", paperNum: "6", variant: "1", paperLabel: "Paper 6 (Alt. to Practical)", diff: "Practical", docs: caie("Chemistry-(0620)", "0620", "2021", "Oct/Nov", "6", "1") },
  { subject: "Chemistry", subjectCode: "0620", session: "Oct/Nov", year: "2020", paperNum: "4", variant: "1", paperLabel: "Paper 4 (Theory Extended)", diff: "Extended", docs: caie("Chemistry-(0620)", "0620", "2020", "Oct/Nov", "4", "1") },
  { subject: "Chemistry", subjectCode: "0620", session: "May/June", year: "2019", paperNum: "4", variant: "2", paperLabel: "Paper 4 (Theory Extended)", diff: "Extended", docs: caie("Chemistry-(0620)", "0620", "2019", "May/June", "4", "2") },
  { subject: "Chemistry", subjectCode: "0620", session: "Oct/Nov", year: "2019", paperNum: "4", variant: "1", paperLabel: "Paper 4 (Theory Extended)", diff: "Extended", docs: caie("Chemistry-(0620)", "0620", "2019", "Oct/Nov", "4", "1") },

  // ── PHYSICS 0625 ──────────────────────────────────────────────────────────
  { subject: "Physics", subjectCode: "0625", session: "May/June", year: "2023", paperNum: "2", variant: "2", paperLabel: "Paper 2 (MCQ Extended)", diff: "Extended", docs: caie("Physics-(0625)", "0625", "2023", "May/June", "2", "2") },
  { subject: "Physics", subjectCode: "0625", session: "May/June", year: "2023", paperNum: "4", variant: "2", paperLabel: "Paper 4 (Theory Extended)", diff: "Extended", docs: caie("Physics-(0625)", "0625", "2023", "May/June", "4", "2") },
  { subject: "Physics", subjectCode: "0625", session: "May/June", year: "2023", paperNum: "6", variant: "2", paperLabel: "Paper 6 (Alt. to Practical)", diff: "Practical", docs: caie("Physics-(0625)", "0625", "2023", "May/June", "6", "2") },
  { subject: "Physics", subjectCode: "0625", session: "Oct/Nov", year: "2023", paperNum: "4", variant: "1", paperLabel: "Paper 4 (Theory Extended)", diff: "Extended", docs: caie("Physics-(0625)", "0625", "2023", "Oct/Nov", "4", "1") },
  { subject: "Physics", subjectCode: "0625", session: "May/June", year: "2022", paperNum: "2", variant: "2", paperLabel: "Paper 2 (MCQ Extended)", diff: "Extended", docs: caie("Physics-(0625)", "0625", "2022", "May/June", "2", "2") },
  { subject: "Physics", subjectCode: "0625", session: "May/June", year: "2022", paperNum: "4", variant: "1", paperLabel: "Paper 4 (Theory Extended)", diff: "Extended", docs: caie("Physics-(0625)", "0625", "2022", "May/June", "4", "1") },
  { subject: "Physics", subjectCode: "0625", session: "May/June", year: "2022", paperNum: "6", variant: "1", paperLabel: "Paper 6 (Alt. to Practical)", diff: "Practical", docs: caie("Physics-(0625)", "0625", "2022", "May/June", "6", "1") },
  { subject: "Physics", subjectCode: "0625", session: "Oct/Nov", year: "2022", paperNum: "2", variant: "2", paperLabel: "Paper 2 (MCQ Extended)", diff: "Extended", docs: caie("Physics-(0625)", "0625", "2022", "Oct/Nov", "2", "2") },
  { subject: "Physics", subjectCode: "0625", session: "Oct/Nov", year: "2022", paperNum: "4", variant: "1", paperLabel: "Paper 4 (Theory Extended)", diff: "Extended", docs: caie("Physics-(0625)", "0625", "2022", "Oct/Nov", "4", "1") },
  { subject: "Physics", subjectCode: "0625", session: "May/June", year: "2021", paperNum: "2", variant: "2", paperLabel: "Paper 2 (MCQ Extended)", diff: "Extended", docs: caie("Physics-(0625)", "0625", "2021", "May/June", "2", "2") },
  { subject: "Physics", subjectCode: "0625", session: "May/June", year: "2021", paperNum: "4", variant: "2", paperLabel: "Paper 4 (Theory Extended)", diff: "Extended", docs: caie("Physics-(0625)", "0625", "2021", "May/June", "4", "2") },
  { subject: "Physics", subjectCode: "0625", session: "Oct/Nov", year: "2021", paperNum: "4", variant: "1", paperLabel: "Paper 4 (Theory Extended)", diff: "Extended", docs: caie("Physics-(0625)", "0625", "2021", "Oct/Nov", "4", "1") },
  { subject: "Physics", subjectCode: "0625", session: "Oct/Nov", year: "2020", paperNum: "4", variant: "1", paperLabel: "Paper 4 (Theory Extended)", diff: "Extended", docs: caie("Physics-(0625)", "0625", "2020", "Oct/Nov", "4", "1") },
  { subject: "Physics", subjectCode: "0625", session: "May/June", year: "2019", paperNum: "4", variant: "2", paperLabel: "Paper 4 (Theory Extended)", diff: "Extended", docs: caie("Physics-(0625)", "0625", "2019", "May/June", "4", "2") },
  { subject: "Physics", subjectCode: "0625", session: "Oct/Nov", year: "2019", paperNum: "4", variant: "1", paperLabel: "Paper 4 (Theory Extended)", diff: "Extended", docs: caie("Physics-(0625)", "0625", "2019", "Oct/Nov", "4", "1") },

  // ── MATHEMATICS 0580 ──────────────────────────────────────────────────────
  { subject: "Mathematics", subjectCode: "0580", session: "May/June", year: "2023", paperNum: "2", variant: "2", paperLabel: "Paper 2 (Extended)", diff: "Extended", docs: caie("Mathematics-(0580)", "0580", "2023", "May/June", "2", "2") },
  { subject: "Mathematics", subjectCode: "0580", session: "May/June", year: "2023", paperNum: "4", variant: "2", paperLabel: "Paper 4 (Extended)", diff: "Extended", docs: caie("Mathematics-(0580)", "0580", "2023", "May/June", "4", "2") },
  { subject: "Mathematics", subjectCode: "0580", session: "Oct/Nov", year: "2023", paperNum: "2", variant: "1", paperLabel: "Paper 2 (Extended)", diff: "Extended", docs: caie("Mathematics-(0580)", "0580", "2023", "Oct/Nov", "2", "1") },
  { subject: "Mathematics", subjectCode: "0580", session: "Oct/Nov", year: "2023", paperNum: "4", variant: "1", paperLabel: "Paper 4 (Extended)", diff: "Extended", docs: caie("Mathematics-(0580)", "0580", "2023", "Oct/Nov", "4", "1") },
  { subject: "Mathematics", subjectCode: "0580", session: "May/June", year: "2022", paperNum: "2", variant: "2", paperLabel: "Paper 2 (Extended)", diff: "Extended", docs: caie("Mathematics-(0580)", "0580", "2022", "May/June", "2", "2") },
  { subject: "Mathematics", subjectCode: "0580", session: "May/June", year: "2022", paperNum: "4", variant: "1", paperLabel: "Paper 4 (Extended)", diff: "Extended", docs: caie("Mathematics-(0580)", "0580", "2022", "May/June", "4", "1") },
  { subject: "Mathematics", subjectCode: "0580", session: "Oct/Nov", year: "2022", paperNum: "2", variant: "2", paperLabel: "Paper 2 (Extended)", diff: "Extended", docs: caie("Mathematics-(0580)", "0580", "2022", "Oct/Nov", "2", "2") },
  { subject: "Mathematics", subjectCode: "0580", session: "Oct/Nov", year: "2022", paperNum: "4", variant: "2", paperLabel: "Paper 4 (Extended)", diff: "Extended", docs: caie("Mathematics-(0580)", "0580", "2022", "Oct/Nov", "4", "2") },
  { subject: "Mathematics", subjectCode: "0580", session: "May/June", year: "2021", paperNum: "2", variant: "1", paperLabel: "Paper 2 (Extended)", diff: "Extended", docs: caie("Mathematics-(0580)", "0580", "2021", "May/June", "2", "1") },
  { subject: "Mathematics", subjectCode: "0580", session: "May/June", year: "2021", paperNum: "4", variant: "2", paperLabel: "Paper 4 (Extended)", diff: "Extended", docs: caie("Mathematics-(0580)", "0580", "2021", "May/June", "4", "2") },
  { subject: "Mathematics", subjectCode: "0580", session: "Oct/Nov", year: "2021", paperNum: "4", variant: "2", paperLabel: "Paper 4 (Extended)", diff: "Extended", docs: caie("Mathematics-(0580)", "0580", "2021", "Oct/Nov", "4", "2") },
  { subject: "Mathematics", subjectCode: "0580", session: "Oct/Nov", year: "2020", paperNum: "4", variant: "2", paperLabel: "Paper 4 (Extended)", diff: "Extended", docs: caie("Mathematics-(0580)", "0580", "2020", "Oct/Nov", "4", "2") },
  { subject: "Mathematics", subjectCode: "0580", session: "May/June", year: "2019", paperNum: "4", variant: "2", paperLabel: "Paper 4 (Extended)", diff: "Extended", docs: caie("Mathematics-(0580)", "0580", "2019", "May/June", "4", "2") },
  { subject: "Mathematics", subjectCode: "0580", session: "Oct/Nov", year: "2019", paperNum: "4", variant: "1", paperLabel: "Paper 4 (Extended)", diff: "Extended", docs: caie("Mathematics-(0580)", "0580", "2019", "Oct/Nov", "4", "1") },
];

export const SUBJECTS = ["Biology", "Chemistry", "Physics", "Mathematics"];
export const YEARS = ["2023", "2022", "2021", "2020", "2019"];
export const PAPER_TYPES = ["Paper 2", "Paper 4", "Paper 6"];
export const DIFFICULTIES = ["Extended", "Core", "Practical"];
