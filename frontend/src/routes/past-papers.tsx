import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Search, FileText, CheckCircle2, Eye, X, ExternalLink,
  BookOpen, ChevronRight, Loader2, Grid3X3, List, Filter,
  GraduationCap, Beaker, Calculator, Globe, Laptop, Palette,
  Briefcase, Languages,
} from "lucide-react";
import { useState, useMemo, useRef, useEffect } from "react";
import {
  IGCSE_SUBJECTS, IGCSE_YEARS, IGCSE_SESSIONS, CATEGORY_META,
  type IgcseSubject, type SubjectCategory,
} from "@/data/past-papers/igcse-subjects";
import { API_BASE } from "@/lib/api-client";
import { useProfile } from "@/lib/profile-context";

export const Route = createFileRoute("/past-papers")({
  head: () => ({ meta: [{ title: "IGCSE Past Papers — ExamGlow" }] }),
  component: PastPapers,
});

// ─── Types ───────────────────────────────────────────────────────────────────
interface PdfState {
  qp: string | null;
  ms: string | null;
  cambridge_url: string;
  found: boolean;
}

interface PaperSelection {
  subject: IgcseSubject;
  year: string;
  session: string;
  paperNum: string;
  paperLabel: string;
  variant: string;
}

// ─── Category icon map ────────────────────────────────────────────────────────
const CATEGORY_ICON: Record<SubjectCategory, React.ElementType> = {
  sciences: Beaker,
  mathematics: Calculator,
  languages: Languages,
  humanities: Globe,
  business: Briefcase,
  technology: Laptop,
  arts: Palette,
  other: GraduationCap,
};

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// ─── Subject Card ─────────────────────────────────────────────────────────────
function SubjectCard({ subject, onClick, isEnrolled }: { subject: IgcseSubject; onClick: () => void; isEnrolled?: boolean }) {
  const meta = CATEGORY_META[subject.category];
  const Icon = CATEGORY_ICON[subject.category];

  return (
    <button
      onClick={onClick}
      className={`group w-full text-left bg-white border rounded-2xl p-4 hover:shadow-md hover:border-primary/30 transition-all cursor-pointer relative ${
        isEnrolled ? "border-primary/40 ring-1 ring-primary/20" : "border-border"
      }`}
    >
      {isEnrolled && (
        <span className="absolute top-2 right-2 text-[9px] font-bold text-primary bg-primary/10 border border-primary/20 rounded-full px-1.5 py-0.5">★ Mine</span>
      )}
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border ${meta.bg}`}>
          <Icon className={`w-5 h-5 ${meta.color}`} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors truncate">{subject.name}</p>
          <p className="text-[11px] text-foreground/50 mt-0.5">{subject.code} · {subject.papers.length} paper types</p>
        </div>
        <ChevronRight className="w-4 h-4 text-foreground/30 group-hover:text-primary transition-colors flex-shrink-0" />
      </div>
    </button>
  );
}

// ─── Paper Row ────────────────────────────────────────────────────────────────
function PaperRow({
  year, session, paper, variant, onView,
}: {
  year: string;
  session: string;
  paper: { num: string; label: string; diff: "Core" | "Extended" | "Practical" };
  variant: string;
  onView: () => void;
}) {
  const diffColor = {
    Extended: "text-blue-700 bg-blue-50 border-blue-200",
    Core: "text-green-700 bg-green-50 border-green-200",
    Practical: "text-purple-700 bg-purple-50 border-purple-200",
  }[paper.diff];

  return (
    <button
      onClick={onView}
      className="w-full flex items-center justify-between py-2.5 px-3 rounded-xl hover:bg-muted/40 transition-colors group text-left cursor-pointer"
    >
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <span className="text-xs font-bold text-foreground/40 w-10 flex-shrink-0">{session === "May/June" ? "M/J" : session === "Oct/Nov" ? "O/N" : "F/M"}</span>
        <span className="text-xs font-semibold text-foreground truncate">{paper.label} · v{variant}</span>
        <span className={`text-[10px] px-1.5 py-0.5 rounded-full border font-semibold hidden sm:inline-block ${diffColor}`}>{paper.diff}</span>
      </div>
      <div
        className="ml-3 px-3 py-1.5 rounded-full text-[11px] font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-all flex items-center gap-1 md:opacity-0 md:group-hover:opacity-100 opacity-100 hover:scale-105 flex-shrink-0"
      >
        <Eye className="w-3 h-3" />
        Open
      </div>
    </button>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
function PastPapers() {
  const { enrolledSubjects } = useProfile();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<SubjectCategory | "all">("all");
  const [activeLetter, setActiveLetter] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showMine, setShowMine] = useState(false);

  // Selected subject for drilldown
  const [selectedSubject, setSelectedSubject] = useState<IgcseSubject | null>(null);
  const [selectedYear, setSelectedYear] = useState<string>("2023");

  // PDF Viewer state
  const [viewingPaper, setViewingPaper] = useState<PaperSelection | null>(null);
  const [loadingPdf, setLoadingPdf] = useState(false);
  const [pdfState, setPdfState] = useState<PdfState | null>(null);
  const [activeTab, setActiveTab] = useState<"qp" | "ms">("qp");

  // ── Filtered subjects ──
  const enrolledNames = useMemo(
    () => new Set(enrolledSubjects.map(s => s.toLowerCase())),
    [enrolledSubjects]
  );

  const isEnrolled = (subject: IgcseSubject) =>
    enrolledNames.has(subject.name.toLowerCase()) ||
    enrolledSubjects.some(s => subject.name.toLowerCase().includes(s.toLowerCase()));

  const filtered = useMemo(() => {
    let list = IGCSE_SUBJECTS;
    if (showMine) {
      list = list.filter(isEnrolled);
    } else {
      if (activeCategory !== "all") list = list.filter((s) => s.category === activeCategory);
      if (activeLetter) list = list.filter((s) => s.name[0].toUpperCase() === activeLetter);
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      list = list.filter((s) => s.name.toLowerCase().includes(q) || s.code.includes(q));
    }
    return list;
  }, [activeCategory, activeLetter, searchQuery, showMine, enrolledNames]);

  // Letters that have subjects
  const availableLetters = useMemo(
    () => new Set(IGCSE_SUBJECTS.map((s) => s.name[0].toUpperCase())),
    []
  );

  // ── Open PDF viewer ──
  const openPaper = async (
    subject: IgcseSubject,
    year: string,
    session: string,
    paperNum: string,
    paperLabel: string,
    variant: string,
  ) => {
    const selection: PaperSelection = { subject, year, session, paperNum, paperLabel, variant };
    setViewingPaper(selection);
    setLoadingPdf(true);
    setPdfState(null);
    setActiveTab("qp");

    try {
      const r = await fetch(
        `${API_BASE}/api/examglow/past-papers/cambridge/?code=${subject.code}&name=${encodeURIComponent(subject.name)}&folder=${encodeURIComponent(subject.folder)}&year=${year}&session=${encodeURIComponent(session)}&paper=${paperNum}&variant=${variant}`
      );
      if (r.ok) {
        const data: PdfState = await r.json();
        setPdfState(data);
        setActiveTab(data.qp ? "qp" : "ms");
      } else {
        setPdfState({ qp: null, ms: null, cambridge_url: "", found: false });
      }
    } catch {
      setPdfState({ qp: null, ms: null, cambridge_url: "", found: false });
    } finally {
      setLoadingPdf(false);
    }
  };

  const closeViewer = () => {
    setViewingPaper(null);
    setPdfState(null);
    setLoadingPdf(false);
  };

  const proxyUrl = (url: string) =>
    `${API_BASE}/api/examglow/past-papers/proxy/?url=${encodeURIComponent(url)}`;

  // ── Category tabs ──
  const categories: { id: SubjectCategory | "all"; label: string }[] = [
    { id: "all", label: "All Subjects" },
    { id: "sciences", label: "Sciences" },
    { id: "mathematics", label: "Mathematics" },
    { id: "languages", label: "Languages" },
    { id: "humanities", label: "Humanities" },
    { id: "business", label: "Business" },
    { id: "technology", label: "Technology" },
    { id: "arts", label: "Arts" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa]">
      <Header authed />

      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-primary/10 via-pink-50 to-violet-50 border-b border-border py-12 px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-3">
          <BookOpen className="w-3.5 h-3.5" />
          Cambridge IGCSE Archive
        </div>
        <h1 className="font-display text-4xl font-bold text-foreground mt-1">IGCSE Past Papers</h1>
        <p className="text-foreground/60 mt-2 max-w-xl mx-auto text-sm">
          Browse all {IGCSE_SUBJECTS.length} IGCSE subjects. Every paper opens directly inside the app — no redirects, no new tabs.
        </p>

        {/* Search Bar */}
        <div className="mt-6 max-w-md mx-auto relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => { setSearchQuery(e.target.value); setActiveLetter(null); }}
            placeholder="Search by subject name or code…"
            className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white border border-border shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
          />
        </div>
      </section>

      <main className="max-w-7xl mx-auto w-full px-4 md:px-6 py-8">
        {/* ── Category filter ── */}
        <div className="flex flex-wrap gap-2 mb-6">
          {/* My Subjects pill */}
          <button
            onClick={() => { setShowMine(!showMine); setActiveCategory("all"); setActiveLetter(null); }}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer border flex items-center gap-1.5 ${
              showMine
                ? "bg-primary text-primary-foreground border-primary shadow-sm"
                : "bg-white text-foreground/60 border-border hover:border-primary/30 hover:text-foreground"
            }`}
          >
            ★ My Subjects
          </button>
          {!showMine && categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => { setActiveCategory(cat.id); setActiveLetter(null); }}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer border ${
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground border-primary shadow-sm"
                  : "bg-white text-foreground/60 border-border hover:border-primary/30 hover:text-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
          <div className="ml-auto flex gap-1.5">
            <button onClick={() => setViewMode("grid")} className={`p-1.5 rounded-lg border cursor-pointer transition-colors ${viewMode === "grid" ? "bg-primary text-white border-primary" : "bg-white border-border text-foreground/50 hover:text-foreground"}`}><Grid3X3 className="w-4 h-4" /></button>
            <button onClick={() => setViewMode("list")} className={`p-1.5 rounded-lg border cursor-pointer transition-colors ${viewMode === "list" ? "bg-primary text-white border-primary" : "bg-white border-border text-foreground/50 hover:text-foreground"}`}><List className="w-4 h-4" /></button>
          </div>
        </div>

        {/* ── A-Z pill bar ── */}
        <div className="flex flex-wrap gap-1 mb-6">
          {ALPHABET.map((letter) => {
            const available = availableLetters.has(letter);
            return (
              <button
                key={letter}
                disabled={!available}
                onClick={() => setActiveLetter(activeLetter === letter ? null : letter)}
                className={`w-7 h-7 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeLetter === letter
                    ? "bg-primary text-white"
                    : available
                    ? "bg-white border border-border text-foreground/70 hover:border-primary/40 hover:text-primary"
                    : "bg-transparent text-foreground/20 cursor-default"
                }`}
              >
                {letter}
              </button>
            );
          })}
        </div>

        {/* ── Subject Browser OR Subject Drilldown ── */}
        {selectedSubject ? (
          /* Subject Detail view */
          <div className="bg-white rounded-3xl border border-border shadow-sm overflow-hidden">
            {/* Header */}
            <div className="px-6 py-5 border-b border-border bg-gradient-to-r from-primary/5 to-transparent flex items-center gap-4">
              <button
                onClick={() => setSelectedSubject(null)}
                className="p-2 rounded-xl border border-border hover:bg-muted transition-colors cursor-pointer text-foreground/60"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="flex-1">
                <div className={`inline-flex items-center gap-1.5 text-[10px] px-2.5 py-1 rounded-full font-bold border ${CATEGORY_META[selectedSubject.category].bg} ${CATEGORY_META[selectedSubject.category].color}`}>
                  {CATEGORY_META[selectedSubject.category].label}
                </div>
                <h2 className="font-display text-2xl font-bold mt-1">{selectedSubject.name}</h2>
                <p className="text-sm text-foreground/50">Code: {selectedSubject.code}</p>
              </div>
              {/* Year selector */}
              <div className="flex gap-1.5 flex-wrap justify-end">
                {IGCSE_YEARS.map((y) => (
                  <button
                    key={y}
                    onClick={() => setSelectedYear(y)}
                    className={`px-3 py-1 rounded-full text-xs font-bold cursor-pointer transition-all ${selectedYear === y ? "bg-primary text-white" : "bg-muted text-foreground/60 hover:text-foreground"}`}
                  >
                    {y}
                  </button>
                ))}
              </div>
            </div>

            {/* Papers per session */}
            <div className="divide-y divide-border">
              {IGCSE_SESSIONS.map((session) => (
                <div key={session} className="px-6 py-4">
                  <p className="text-xs font-bold text-foreground/40 uppercase mb-2">{session} {selectedYear}</p>
                  <div className="space-y-0.5">
                    {selectedSubject.papers.flatMap((paper) =>
                      ["1", "2"].map((variant) => (
                        <PaperRow
                          key={`${session}-${paper.num}-${variant}`}
                          year={selectedYear}
                          session={session}
                          paper={paper}
                          variant={variant}
                          onView={() =>
                            openPaper(
                              selectedSubject,
                              selectedYear,
                              session,
                              paper.num,
                              paper.label,
                              variant,
                            )
                          }
                        />
                      ))
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Subject grid/list */
          <>
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs text-foreground/50">
                Showing <b>{filtered.length}</b> subjects{activeLetter ? ` starting with "${activeLetter}"` : ""}
              </p>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-20 text-foreground/40">
                <Search className="w-12 h-12 mx-auto mb-4 opacity-30" />
                <p className="font-semibold">No subjects found</p>
                <button
                  onClick={() => { setSearchQuery(""); setActiveLetter(null); setActiveCategory("all"); }}
                  className="mt-4 px-4 py-2 rounded-full border border-border text-sm hover:bg-muted cursor-pointer"
                >
                  Clear filters
                </button>
              </div>
            ) : viewMode === "grid" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {filtered.map((subject) => (
                  <SubjectCard
                    key={subject.code}
                    subject={subject}
                    isEnrolled={isEnrolled(subject)}
                    onClick={() => { setSelectedSubject(subject); setSelectedYear("2023"); }}
                  />
                ))}
              </div>
            ) : (
              <div className="space-y-1.5">
                {filtered.map((subject) => {
                  const meta = CATEGORY_META[subject.category];
                  const Icon = CATEGORY_ICON[subject.category];
                  return (
                    <button
                      key={subject.code}
                      onClick={() => { setSelectedSubject(subject); setSelectedYear("2023"); }}
                      className="group w-full flex items-center gap-4 bg-white border border-border rounded-2xl px-5 py-3.5 hover:shadow-sm hover:border-primary/30 transition-all cursor-pointer text-left"
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 border ${meta.bg}`}>
                        <Icon className={`w-4 h-4 ${meta.color}`} />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-sm group-hover:text-primary transition-colors">{subject.name}</span>
                        <span className="ml-2 text-xs text-foreground/40">{subject.code}</span>
                      </div>
                      {isEnrolled(subject) && (
                        <span className="text-[9px] font-bold text-primary bg-primary/10 border border-primary/20 rounded-full px-1.5 py-0.5">★ Mine</span>
                      )}
                      <span className={`text-[10px] px-2 py-0.5 rounded-full border font-semibold ${meta.bg} ${meta.color}`}>{meta.label}</span>
                      <ChevronRight className="w-4 h-4 text-foreground/30 group-hover:text-primary transition-colors" />
                    </button>
                  );
                })}
              </div>
            )}
          </>
        )}
      </main>

      <Footer />

      {/* ── Full-Screen PDF Viewer ── */}
      {viewingPaper && (
        <FullScreenPdfViewer
          paper={viewingPaper}
          pdfState={pdfState}
          loadingPdf={loadingPdf}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          proxyUrl={proxyUrl}
          onClose={closeViewer}
        />
      )}
    </div>
  );
}

// ── Full-Screen PDF Viewer Component ─────────────────────────────────────────
function FullScreenPdfViewer({
  paper, pdfState, loadingPdf, activeTab, setActiveTab, proxyUrl, onClose,
}: {
  paper: PaperSelection;
  pdfState: PdfState | null;
  loadingPdf: boolean;
  activeTab: "qp" | "ms";
  setActiveTab: (t: "qp" | "ms") => void;
  proxyUrl: (url: string) => string;
  onClose: () => void;
}) {
  const [controlsVisible, setControlsVisible] = useState(true);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Auto-hide controls after 3s once PDF is loaded
  useEffect(() => {
    if (pdfState?.found && !loadingPdf) {
      hideTimerRef.current = setTimeout(() => setControlsVisible(false), 3000);
    }
    return () => { if (hideTimerRef.current) clearTimeout(hideTimerRef.current); };
  }, [pdfState?.found, loadingPdf]);

  const toggleControls = () => {
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    setControlsVisible(v => {
      if (!v) return true; // show controls
      // When hiding start a timer to auto-hide again
      hideTimerRef.current = setTimeout(() => setControlsVisible(false), 3000);
      return true;
    });
    setControlsVisible(v => !v);
  };

  const iframeSrc = activeTab === "qp" && pdfState?.qp
    ? proxyUrl(pdfState.qp)
    : pdfState?.ms ? proxyUrl(pdfState.ms) : null;

  return (
    <div className="fixed inset-0 z-[200] bg-black flex flex-col" onClick={toggleControls}>

      {/* Controls overlay — fades in/out */}
      <div
        className={`absolute inset-x-0 top-0 z-10 flex flex-col transition-all duration-300 ${controlsVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={e => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="bg-black/80 backdrop-blur-md px-4 pt-safe-top py-3 flex items-center gap-3">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 border ${CATEGORY_META[paper.subject.category].bg}`}>
            {(() => { const Icon = CATEGORY_ICON[paper.subject.category]; return <Icon className={`w-4 h-4 ${CATEGORY_META[paper.subject.category].color}`} />; })()}
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-bold text-sm text-white truncate">{paper.subject.name} — {paper.paperLabel}</p>
            <p className="text-[11px] text-white/50">{paper.session} {paper.year} · v{paper.variant}</p>
          </div>
          <div className="flex items-center gap-1">
            {pdfState?.found && iframeSrc && (
              <a
                href={iframeSrc}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/60 hover:text-white"
                title="Open in new tab"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/60 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* QP / MS tabs */}
        {pdfState?.found && (
          <div className="bg-black/70 backdrop-blur-md px-4 pb-2 flex gap-2" onClick={e => e.stopPropagation()}>
            {pdfState.qp && (
              <button
                onClick={() => setActiveTab("qp")}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold transition-all ${activeTab === "qp" ? "bg-primary text-white" : "text-white/50 hover:text-white"}`}
              >
                <FileText className="w-3 h-3" /> Question Paper
              </button>
            )}
            {pdfState.ms && (
              <button
                onClick={() => setActiveTab("ms")}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold transition-all ${activeTab === "ms" ? "bg-primary text-white" : "text-white/50 hover:text-white"}`}
              >
                <CheckCircle2 className="w-3 h-3" /> Mark Scheme
              </button>
            )}
          </div>
        )}
      </div>

      {/* Loading state */}
      {loadingPdf && (
        <div className="flex-1 flex flex-col items-center justify-center bg-black gap-4">
          <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center">
            <Loader2 className="w-8 h-8 text-primary animate-spin" />
          </div>
          <p className="font-semibold text-sm text-white">Fetching paper from archive…</p>
          <p className="text-xs text-white/40">Checking Cambridge official index &amp; XtremePapers mirror</p>
        </div>
      )}

      {/* PDF iframe — full screen */}
      {pdfState?.found && !loadingPdf && iframeSrc && (
        <iframe
          src={iframeSrc}
          className="flex-1 w-full border-0 block"
          title={activeTab === "qp" ? "Question Paper" : "Mark Scheme"}
          onClick={e => e.stopPropagation()}
        />
      )}

      {/* Not found */}
      {pdfState && !pdfState.found && !loadingPdf && (
        <div className="flex-1 flex flex-col items-center justify-center bg-black gap-4 p-8">
          <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center">
            <FileText className="w-7 h-7 text-amber-400" />
          </div>
          <h4 className="font-bold text-base text-white">Paper Not Found</h4>
          <p className="text-xs text-white/50 max-w-sm text-center leading-relaxed">
            This paper wasn't found on the Cambridge official index or XtremePapers archive. Try a different year, session, or variant.
          </p>
          <button
            onClick={onClose}
            className="mt-2 px-6 py-2 rounded-full bg-white/10 text-white text-sm font-semibold hover:bg-white/20 transition-colors"
          >
            ← Back
          </button>
        </div>
      )}

      {/* Tap hint — shown briefly then fades */}
      {pdfState?.found && !loadingPdf && controlsVisible && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/60 text-white/60 text-[10px] px-3 py-1 rounded-full pointer-events-none">
          Tap to hide controls
        </div>
      )}
    </div>
  );
}
