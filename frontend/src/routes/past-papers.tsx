import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { toast } from "sonner";
import {
  Filter, FileText, CheckCircle2, Download, Calendar,
  Layers, X, ExternalLink, BookOpen, ChevronDown, ChevronUp,
} from "lucide-react";
import { useState, useMemo } from "react";
import { allPastPapers, SUBJECTS, YEARS, PAPER_TYPES, type PastPaper } from "@/data/past-papers/index";
import { useProfile } from "@/lib/profile-context";

export const Route = createFileRoute("/past-papers")({
  head: () => ({ meta: [{ title: "Past Paper Archive — ExamGlow" }] }),
  component: PastPapers,
});

const diffColor: Record<string, string> = {
  Extended: "text-blue-700 bg-blue-50 border-blue-200",
  Core: "text-green-700 bg-green-50 border-green-200",
  Practical: "text-purple-700 bg-purple-50 border-purple-200",
};

const subjectColor: Record<string, string> = {
  Biology: "text-emerald-700 bg-emerald-50",
  Chemistry: "text-blue-700 bg-blue-50",
  Physics: "text-amber-700 bg-amber-50",
  Mathematics: "text-violet-700 bg-violet-50",
};

function PaperCard({ paper }: { paper: PastPaper }) {
  const [expanded, setExpanded] = useState(false);

  const handleOpen = (url: string, label: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
    toast.success(`Opening ${label}`, {
      description: "PDF will open in a new tab. If it doesn't load, try the direct Cambridge link.",
      duration: 3000,
    });
  };

  return (
    <div className="bg-white border border-border rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-4 flex items-center gap-4">
        {/* Year badge */}
        <div className="bg-pink-softer rounded-xl w-14 h-14 flex flex-col items-center justify-center flex-shrink-0">
          <Calendar className="w-3.5 h-3.5 text-primary mb-0.5" />
          <span className="text-xs font-bold text-primary">{paper.year}</span>
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${subjectColor[paper.subject] ?? "bg-muted text-foreground/60"}`}>
              {paper.subject}
            </span>
            <span className={`text-[10px] px-2 py-0.5 rounded-full border font-semibold ${diffColor[paper.diff]}`}>
              {paper.diff}
            </span>
          </div>
          <p className="font-semibold mt-1 text-sm">{paper.session} {paper.year}</p>
          <div className="flex gap-3 text-xs text-foreground/60 mt-0.5 flex-wrap">
            <span className="flex items-center gap-1">
              <FileText className="w-3 h-3" /> {paper.subjectCode}/{paper.paperNum}{paper.variant}
            </span>
            <span className="flex items-center gap-1">
              <Layers className="w-3 h-3" /> {paper.paperLabel}
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
          <div className="flex gap-2 flex-wrap justify-end">
            {paper.docs.map((doc) => (
              <button
                key={doc.type}
                onClick={() => handleOpen(doc.url, doc.label)}
                className={`px-3 py-1.5 rounded-full text-xs inline-flex items-center gap-1 font-semibold transition-colors ${
                  doc.type === "qp"
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-border hover:bg-muted"
                }`}
              >
                {doc.type === "qp" ? <FileText className="w-3 h-3" /> : <CheckCircle2 className="w-3 h-3" />}
                {doc.label}
              </button>
            ))}
          </div>
          <button
            onClick={() => setExpanded((v) => !v)}
            className="text-xs text-foreground/50 flex items-center gap-1 hover:text-primary transition-colors"
          >
            {expanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            {expanded ? "Less" : "More options"}
          </button>
        </div>
      </div>

      {/* Expanded: direct Cambridge link + embed preview */}
      {expanded && (
        <div className="border-t border-border bg-muted/20 px-4 py-3 space-y-2">
          <p className="text-xs text-foreground/60 font-semibold">Direct links:</p>
          <div className="flex flex-wrap gap-2">
            {paper.docs.map((doc) => (
              <a
                key={doc.type}
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-primary flex items-center gap-1 hover:underline"
              >
                <ExternalLink className="w-3 h-3" />
                {doc.label} (PDF)
              </a>
            ))}
            <a
              href={`https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-${paper.subject.toLowerCase()}-${paper.subjectCode}/past-papers/`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-foreground/50 flex items-center gap-1 hover:text-primary hover:underline"
            >
              <ExternalLink className="w-3 h-3" />
              Official Cambridge page
            </a>
          </div>
          <p className="text-[10px] text-foreground/40">
            Papers hosted by PapaCambridge — an unofficial mirror of official CAIE resources.
            If a link doesn't work, use the official Cambridge link above.
          </p>
        </div>
      )}
    </div>
  );
}

function PastPapers() {
  const { enrolledSubjects } = useProfile();
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>(
    enrolledSubjects.filter((s) => SUBJECTS.includes(s))
  );
  const [selectedYears, setSelectedYears] = useState<string[]>([]);
  const [selectedPapers, setSelectedPapers] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const toggle = (arr: string[], setArr: (v: string[]) => void, val: string) => {
    setArr(arr.includes(val) ? arr.filter((v) => v !== val) : [...arr, val]);
  };

  const clearAll = () => {
    setSelectedSubjects([]);
    setSelectedYears([]);
    setSelectedPapers([]);
    setSearchQuery("");
  };

  const filtered = useMemo(() => {
    return allPastPapers.filter((p) => {
      if (selectedSubjects.length > 0 && !selectedSubjects.includes(p.subject)) return false;
      if (selectedYears.length > 0 && !selectedYears.includes(p.year)) return false;
      if (selectedPapers.length > 0) {
        const match = selectedPapers.some((pt) => p.paperLabel.includes(pt.replace("Paper ", "Paper ")));
        if (!match) return false;
      }
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        if (
          !p.subject.toLowerCase().includes(q) &&
          !p.subjectCode.includes(q) &&
          !p.session.toLowerCase().includes(q) &&
          !p.year.includes(q) &&
          !p.paperLabel.toLowerCase().includes(q)
        ) return false;
      }
      return true;
    });
  }, [selectedSubjects, selectedYears, selectedPapers, searchQuery]);

  const activeTags = [...selectedSubjects, ...selectedYears, ...selectedPapers];

  // Group by subject for display
  const grouped = useMemo(() => {
    const groups: Record<string, PastPaper[]> = {};
    for (const p of filtered) {
      if (!groups[p.subject]) groups[p.subject] = [];
      groups[p.subject].push(p);
    }
    return groups;
  }, [filtered]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header authed />

      <section className="bg-pink-soft text-center py-14 px-6">
        <span className="text-xs px-3 py-1 rounded-full bg-white text-primary font-semibold">Cambridge IGCSE</span>
        <h1 className="font-display text-4xl mt-3">Past Paper Archive</h1>
        <p className="text-foreground/70 mt-2 max-w-2xl mx-auto">
          Real Cambridge IGCSE past papers with mark schemes. Click any paper to open the PDF directly.
        </p>
        <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 text-sm text-foreground/70">
          <BookOpen className="w-4 h-4 text-primary" />
          <span><b>{allPastPapers.length}</b> papers available · 2019–2023 · Biology, Chemistry, Physics, Mathematics</span>
        </div>
      </section>

      <main className="max-w-7xl mx-auto w-full px-4 md:px-6 py-10 grid md:grid-cols-[240px_1fr] gap-8">
        {/* Filters sidebar */}
        <aside className="bg-white border border-border rounded-2xl p-5 h-fit md:sticky md:top-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold flex items-center gap-2">
              <Filter className="w-4 h-4 text-primary" /> Filters
            </h3>
            {activeTags.length > 0 && (
              <button onClick={clearAll} className="text-xs text-primary">Clear all</button>
            )}
          </div>

          <div className="mt-5">
            <p className="text-xs font-semibold mb-2">Search</p>
            <input
              className="w-full border border-border rounded-lg px-3 py-2 text-sm"
              placeholder="Subject, year, code…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="mt-5">
            <p className="text-xs font-semibold mb-2">Subject</p>
            <div className="space-y-1.5 text-sm">
              {SUBJECTS.map((s) => (
                <label key={s} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedSubjects.includes(s)}
                    onChange={() => toggle(selectedSubjects, setSelectedSubjects, s)}
                    className="accent-pink-400"
                  />
                  {s}
                </label>
              ))}
            </div>
          </div>

          <div className="mt-5">
            <p className="text-xs font-semibold mb-2">Year</p>
            <div className="grid grid-cols-2 gap-1.5 text-sm">
              {YEARS.map((y) => (
                <label key={y} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedYears.includes(y)}
                    onChange={() => toggle(selectedYears, setSelectedYears, y)}
                    className="accent-pink-400"
                  />
                  {y}
                </label>
              ))}
            </div>
          </div>

          <div className="mt-5">
            <p className="text-xs font-semibold mb-2">Paper Type</p>
            <div className="space-y-1.5 text-sm">
              {PAPER_TYPES.map((pt) => (
                <label key={pt} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedPapers.includes(pt)}
                    onChange={() => toggle(selectedPapers, setSelectedPapers, pt)}
                    className="accent-pink-400"
                  />
                  {pt}
                </label>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-border">
            <p className="text-xs text-foreground/50 leading-relaxed">
              Papers are sourced from PapaCambridge, an unofficial mirror of official CAIE resources. All papers are © Cambridge Assessment International Education.
            </p>
          </div>
        </aside>

        {/* Results */}
        <section>
          {/* Active filter tags */}
          {activeTags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mb-4 text-sm">
              <span className="text-foreground/60 text-xs">Active:</span>
              {activeTags.map((t) => (
                <span key={t} className="px-2 py-1 rounded-full bg-pink-softer text-primary text-xs flex items-center gap-1">
                  {t}
                  <button onClick={() => {
                    if (selectedSubjects.includes(t)) toggle(selectedSubjects, setSelectedSubjects, t);
                    else if (selectedYears.includes(t)) toggle(selectedYears, setSelectedYears, t);
                    else toggle(selectedPapers, setSelectedPapers, t);
                  }}>
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
              <span className="ml-auto text-xs text-foreground/50">
                {filtered.length} paper{filtered.length !== 1 ? "s" : ""}
              </span>
            </div>
          )}

          {filtered.length === 0 ? (
            <div className="text-center py-20 text-foreground/40">
              <FileText className="w-12 h-12 mx-auto mb-4 opacity-30" />
              <p className="font-semibold">No papers match your filters</p>
              <button onClick={clearAll} className="mt-4 px-4 py-2 rounded-full border border-border text-sm hover:bg-muted">
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              {Object.entries(grouped).map(([subject, papers]) => (
                <div key={subject}>
                  <h2 className="font-display text-xl mb-4 flex items-center gap-2">
                    <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${subjectColor[subject] ?? "bg-muted"}`}>
                      {subject}
                    </span>
                    <span className="text-sm text-foreground/50 font-normal">{papers.length} paper{papers.length !== 1 ? "s" : ""}</span>
                  </h2>
                  <div className="space-y-3">
                    {papers.map((p, i) => (
                      <PaperCard key={`${p.subjectCode}-${p.session}-${p.year}-${p.paperNum}-${p.variant}-${i}`} paper={p} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Bottom CTA */}
          <div className="mt-10 rounded-2xl bg-lavender-soft p-6 flex items-center gap-6">
            <div className="flex-1">
              <h3 className="font-display text-xl text-lavender">Need more papers?</h3>
              <p className="text-sm text-foreground/60 mt-2">
                For the complete archive including pre-2019 papers, visit the official Cambridge resource bank.
              </p>
              <a
                href="https://www.cambridgeinternational.org/support-and-training-for-schools/support-for-teachers/past-papers/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lavender text-white text-sm hover:bg-lavender/90"
              >
                <ExternalLink className="w-4 h-4" />
                Official Cambridge Resource Bank
              </a>
            </div>
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center flex-shrink-0">
              <ExternalLink className="w-8 h-8 text-lavender" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
