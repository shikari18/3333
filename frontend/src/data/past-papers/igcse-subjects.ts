/**
 * Complete IGCSE Subject Catalog
 * Sourced from Cambridge IGCSE / PapaCambridge
 * Covers all available subjects with their XtremePapers folder names for direct PDF access
 */

export interface IgcseSubject {
  name: string;
  code: string;
  // XtremePapers folder name, e.g. "Accounting (0452)"
  folder: string;
  // Paper numbers that exist for this subject
  papers: PaperConfig[];
  // Subject category for color coding
  category: SubjectCategory;
}

export type SubjectCategory =
  | "sciences"
  | "mathematics"
  | "languages"
  | "humanities"
  | "business"
  | "technology"
  | "arts"
  | "other";

export interface PaperConfig {
  num: string;
  label: string;
  diff: "Core" | "Extended" | "Practical";
}

const SCIENCE_PAPERS: PaperConfig[] = [
  { num: "1", label: "Paper 1 (MCQ Core)", diff: "Core" },
  { num: "2", label: "Paper 2 (MCQ Extended)", diff: "Extended" },
  { num: "3", label: "Paper 3 (Theory Core)", diff: "Core" },
  { num: "4", label: "Paper 4 (Theory Extended)", diff: "Extended" },
  { num: "6", label: "Paper 6 (Alt. to Practical)", diff: "Practical" },
];

const MATHS_PAPERS: PaperConfig[] = [
  { num: "1", label: "Paper 1 (Core)", diff: "Core" },
  { num: "2", label: "Paper 2 (Extended)", diff: "Extended" },
  { num: "3", label: "Paper 3 (Core)", diff: "Core" },
  { num: "4", label: "Paper 4 (Extended)", diff: "Extended" },
];

const HUMANITIES_PAPERS: PaperConfig[] = [
  { num: "1", label: "Paper 1", diff: "Core" },
  { num: "2", label: "Paper 2", diff: "Extended" },
  { num: "4", label: "Paper 4", diff: "Extended" },
];

const LANGUAGE_PAPERS: PaperConfig[] = [
  { num: "1", label: "Paper 1 (Reading & Writing)", diff: "Core" },
  { num: "2", label: "Paper 2 (Reading)", diff: "Extended" },
  { num: "3", label: "Paper 3 (Speaking)", diff: "Core" },
];

const BUSINESS_PAPERS: PaperConfig[] = [
  { num: "1", label: "Paper 1 (Short Answer)", diff: "Core" },
  { num: "2", label: "Paper 2 (Case Study)", diff: "Extended" },
];

export const IGCSE_SUBJECTS: IgcseSubject[] = [
  // ── A ──────────────────────────────────────────────────────────────────────
  { name: "Accounting", code: "0452", folder: "Accounting (0452)", papers: BUSINESS_PAPERS, category: "business" },
  { name: "Afrikaans - First Language", code: "0512", folder: "Afrikaans - First Language (0512)", papers: LANGUAGE_PAPERS, category: "languages" },
  { name: "Afrikaans - Second Language", code: "0548", folder: "Afrikaans - Second Language (0548)", papers: LANGUAGE_PAPERS, category: "languages" },
  { name: "Agriculture", code: "0600", folder: "Agriculture (0600)", papers: HUMANITIES_PAPERS, category: "sciences" },
  { name: "Arabic - First Language", code: "0508", folder: "Arabic - First Language (0508)", papers: LANGUAGE_PAPERS, category: "languages" },
  { name: "Arabic - Foreign Language", code: "0544", folder: "Arabic - Foreign Language (0544)", papers: LANGUAGE_PAPERS, category: "languages" },
  { name: "Art & Design", code: "0400", folder: "Art & Design (0400)", papers: [{ num: "1", label: "Paper 1 (Portfolio)", diff: "Core" }, { num: "2", label: "Paper 2 (Examination)", diff: "Extended" }], category: "arts" },

  // ── B ──────────────────────────────────────────────────────────────────────
  { name: "Biology", code: "0610", folder: "Biology (0610)", papers: SCIENCE_PAPERS, category: "sciences" },
  { name: "Business Studies", code: "0450", folder: "Business Studies (0450)", papers: BUSINESS_PAPERS, category: "business" },

  // ── C ──────────────────────────────────────────────────────────────────────
  { name: "Chemistry", code: "0620", folder: "Chemistry (0620)", papers: SCIENCE_PAPERS, category: "sciences" },
  { name: "Chinese - First Language", code: "0509", folder: "Chinese - First Language (0509)", papers: LANGUAGE_PAPERS, category: "languages" },
  { name: "Chinese - Foreign Language", code: "0547", folder: "Chinese - Foreign Language (0547)", papers: LANGUAGE_PAPERS, category: "languages" },
  { name: "Chinese - Second Language", code: "0527", folder: "Chinese - Second Language (0527)", papers: LANGUAGE_PAPERS, category: "languages" },
  { name: "Computer Science", code: "0478", folder: "Computer Science (0478)", papers: [{ num: "1", label: "Paper 1 (Theory)", diff: "Core" }, { num: "2", label: "Paper 2 (Problem Solving)", diff: "Extended" }], category: "technology" },

  // ── D ──────────────────────────────────────────────────────────────────────
  { name: "Design & Technology", code: "0445", folder: "Design & Technology (0445)", papers: HUMANITIES_PAPERS, category: "arts" },
  { name: "Drama", code: "0411", folder: "Drama (0411)", papers: [{ num: "1", label: "Paper 1 (Written)", diff: "Core" }, { num: "2", label: "Paper 2 (Practical)", diff: "Practical" }], category: "arts" },

  // ── E ──────────────────────────────────────────────────────────────────────
  { name: "Economics", code: "0455", folder: "Economics (0455)", papers: BUSINESS_PAPERS, category: "business" },
  { name: "English - First Language", code: "0500", folder: "English - First Language (0500)", papers: [{ num: "1", label: "Paper 1 (Reading & Writing)", diff: "Core" }, { num: "2", label: "Paper 2 (Directed Writing)", diff: "Extended" }], category: "languages" },
  { name: "English - Literature", code: "0486", folder: "English - Literature (0486)", papers: [{ num: "1", label: "Paper 1 (Poetry & Prose)", diff: "Core" }, { num: "2", label: "Paper 2 (Drama)", diff: "Extended" }, { num: "4", label: "Paper 4 (Coursework)", diff: "Core" }], category: "languages" },
  { name: "English - Second Language", code: "0510", folder: "English - Second Language (0510)", papers: [{ num: "1", label: "Paper 1 (Reading)", diff: "Core" }, { num: "2", label: "Paper 2 (Listening)", diff: "Core" }, { num: "3", label: "Paper 3 (Speaking)", diff: "Core" }], category: "languages" },
  { name: "English as a Second Language", code: "0511", folder: "English as a Second Language (Speaking Endorsement) (0511)", papers: [{ num: "1", label: "Paper 1 (Reading)", diff: "Core" }, { num: "2", label: "Paper 2 (Writing)", diff: "Extended" }], category: "languages" },
  { name: "Environmental Management", code: "0680", folder: "Environmental Management (0680)", papers: HUMANITIES_PAPERS, category: "sciences" },

  // ── F ──────────────────────────────────────────────────────────────────────
  { name: "Food & Nutrition", code: "0648", folder: "Food & Nutrition (0648)", papers: HUMANITIES_PAPERS, category: "other" },
  { name: "French - First Language", code: "0501", folder: "French - First Language (0501)", papers: LANGUAGE_PAPERS, category: "languages" },
  { name: "French - Foreign Language", code: "0520", folder: "French - Foreign Language (0520)", papers: LANGUAGE_PAPERS, category: "languages" },

  // ── G ──────────────────────────────────────────────────────────────────────
  { name: "Geography", code: "0460", folder: "Geography (0460)", papers: [{ num: "1", label: "Paper 1 (Core Physical)", diff: "Core" }, { num: "2", label: "Paper 2 (Core Human)", diff: "Core" }, { num: "4", label: "Paper 4 (Alternative to Coursework)", diff: "Extended" }], category: "humanities" },
  { name: "German - First Language", code: "0505", folder: "German - First Language (0505)", papers: LANGUAGE_PAPERS, category: "languages" },
  { name: "German - Foreign Language", code: "0525", folder: "German - Foreign Language (0525)", papers: LANGUAGE_PAPERS, category: "languages" },
  { name: "Global Perspectives", code: "0457", folder: "Global Perspectives (0457)", papers: [{ num: "1", label: "Paper 1 (Written Examination)", diff: "Core" }], category: "humanities" },

  // ── H ──────────────────────────────────────────────────────────────────────
  { name: "History", code: "0470", folder: "History (0470)", papers: [{ num: "1", label: "Paper 1 (Core Topics)", diff: "Core" }, { num: "2", label: "Paper 2 (Depth Studies)", diff: "Extended" }, { num: "4", label: "Paper 4 (Alternative to Coursework)", diff: "Extended" }], category: "humanities" },

  // ── I ──────────────────────────────────────────────────────────────────────
  { name: "ICT", code: "0417", folder: "Information and Communication Technology (0417)", papers: [{ num: "1", label: "Paper 1 (Theory)", diff: "Core" }, { num: "2", label: "Paper 2 (Practical)", diff: "Practical" }, { num: "3", label: "Paper 3 (Practical)", diff: "Practical" }], category: "technology" },
  { name: "Indonesian - Foreign Language", code: "0545", folder: "Indonesian - Foreign Language (0545)", papers: LANGUAGE_PAPERS, category: "languages" },
  { name: "Italian - Foreign Language", code: "0535", folder: "Italian - Foreign Language (0535)", papers: LANGUAGE_PAPERS, category: "languages" },

  // ── J ──────────────────────────────────────────────────────────────────────
  { name: "Japanese - Foreign Language", code: "0519", folder: "Japanese - Foreign Language (0519)", papers: LANGUAGE_PAPERS, category: "languages" },

  // ── K ──────────────────────────────────────────────────────────────────────
  { name: "Kannada", code: "0657", folder: "Kannada (0657)", papers: LANGUAGE_PAPERS, category: "languages" },
  { name: "Korean - Foreign Language", code: "0521", folder: "Korean - Foreign Language (0521)", papers: LANGUAGE_PAPERS, category: "languages" },

  // ── L ──────────────────────────────────────────────────────────────────────
  { name: "Latin", code: "0480", folder: "Latin (0480)", papers: HUMANITIES_PAPERS, category: "humanities" },

  // ── M ──────────────────────────────────────────────────────────────────────
  { name: "Malay - Foreign Language", code: "0546", folder: "Malay - Foreign Language (0546)", papers: LANGUAGE_PAPERS, category: "languages" },
  { name: "Mathematics", code: "0580", folder: "Mathematics (0580)", papers: MATHS_PAPERS, category: "mathematics" },
  { name: "Mathematics - Additional", code: "0606", folder: "Mathematics - Additional (0606)", papers: [{ num: "1", label: "Paper 1", diff: "Extended" }, { num: "2", label: "Paper 2", diff: "Extended" }], category: "mathematics" },
  { name: "Mathematics - International", code: "0607", folder: "Mathematics - International (0607)", papers: MATHS_PAPERS, category: "mathematics" },
  { name: "Music", code: "0410", folder: "Music (0410)", papers: [{ num: "1", label: "Paper 1 (Listening)", diff: "Core" }, { num: "3", label: "Paper 3 (Performing)", diff: "Practical" }], category: "arts" },

  // ── P ──────────────────────────────────────────────────────────────────────
  { name: "Pakistan Studies", code: "0448", folder: "Pakistan Studies (0448)", papers: HUMANITIES_PAPERS, category: "humanities" },
  { name: "Physical Education", code: "0413", folder: "Physical Education (0413)", papers: [{ num: "1", label: "Paper 1 (Theory)", diff: "Core" }, { num: "2", label: "Paper 2 (Practical)", diff: "Practical" }], category: "other" },
  { name: "Physics", code: "0625", folder: "Physics (0625)", papers: SCIENCE_PAPERS, category: "sciences" },
  { name: "Portuguese - First Language", code: "0504", folder: "Portuguese - First Language (0504)", papers: LANGUAGE_PAPERS, category: "languages" },
  { name: "Portuguese - Foreign Language", code: "0540", folder: "Portuguese - Foreign Language (0540)", papers: LANGUAGE_PAPERS, category: "languages" },

  // ── R ──────────────────────────────────────────────────────────────────────
  { name: "Religious Studies", code: "0490", folder: "Religious Studies (0490)", papers: HUMANITIES_PAPERS, category: "humanities" },
  { name: "Russian - First Language", code: "0516", folder: "Russian - First Language (0516)", papers: LANGUAGE_PAPERS, category: "languages" },

  // ── S ──────────────────────────────────────────────────────────────────────
  { name: "Science - Combined", code: "0653", folder: "Science - Combined (0653)", papers: [{ num: "1", label: "Paper 1 (MCQ)", diff: "Core" }, { num: "2", label: "Paper 2 (Core Theory)", diff: "Core" }, { num: "3", label: "Paper 3 (Extended Theory)", diff: "Extended" }, { num: "6", label: "Paper 6 (Alt. to Practical)", diff: "Practical" }], category: "sciences" },
  { name: "Science - Co-ordinated", code: "0654", folder: "Science - Co-ordinated (0654)", papers: SCIENCE_PAPERS, category: "sciences" },
  { name: "Sociology", code: "0495", folder: "Sociology (0495)", papers: HUMANITIES_PAPERS, category: "humanities" },
  { name: "Spanish - First Language", code: "0502", folder: "Spanish - First Language (0502)", papers: LANGUAGE_PAPERS, category: "languages" },
  { name: "Spanish - Foreign Language", code: "0530", folder: "Spanish - Foreign Language (0530)", papers: LANGUAGE_PAPERS, category: "languages" },

  // ── T ──────────────────────────────────────────────────────────────────────
  { name: "Tamil", code: "0659", folder: "Tamil (0659)", papers: LANGUAGE_PAPERS, category: "languages" },
  { name: "Travel & Tourism", code: "0471", folder: "Travel & Tourism (0471)", papers: BUSINESS_PAPERS, category: "business" },

  // ── U ──────────────────────────────────────────────────────────────────────
  { name: "Urdu - First Language", code: "0570", folder: "Urdu - First Language (0570)", papers: LANGUAGE_PAPERS, category: "languages" },
  { name: "Urdu - Second Language", code: "0539", folder: "Urdu - Second Language (0539)", papers: LANGUAGE_PAPERS, category: "languages" },
];

export const CATEGORY_META: Record<SubjectCategory, { label: string; color: string; bg: string }> = {
  sciences: { label: "Sciences", color: "text-emerald-700", bg: "bg-emerald-50 border-emerald-200" },
  mathematics: { label: "Mathematics", color: "text-violet-700", bg: "bg-violet-50 border-violet-200" },
  languages: { label: "Languages", color: "text-blue-700", bg: "bg-blue-50 border-blue-200" },
  humanities: { label: "Humanities", color: "text-amber-700", bg: "bg-amber-50 border-amber-200" },
  business: { label: "Business", color: "text-rose-700", bg: "bg-rose-50 border-rose-200" },
  technology: { label: "Technology", color: "text-cyan-700", bg: "bg-cyan-50 border-cyan-200" },
  arts: { label: "Arts", color: "text-pink-700", bg: "bg-pink-50 border-pink-200" },
  other: { label: "Other", color: "text-slate-700", bg: "bg-slate-50 border-slate-200" },
};

export const IGCSE_YEARS = ["2024", "2023", "2022", "2021", "2020", "2019"];
export const IGCSE_SESSIONS = ["May/June", "Oct/Nov", "Feb/Mar"];
