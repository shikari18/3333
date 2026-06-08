import { useState } from "react";
import { ChevronLeft, ChevronRight, Lightbulb, AlertTriangle } from "lucide-react";
import type { NoteChapter, NotePage, NoteBlock, BulletItem } from "@/data/notes/index";

// ── Inline text parser — wraps **bold** and ==highlight== ────────────────────
function parseInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|==\S[^=]*\S==)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="font-bold text-foreground">{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("==") && part.endsWith("==")) {
      return <mark key={i} className="bg-primary/20 text-primary px-0.5 rounded not-italic">{part.slice(2, -2)}</mark>;
    }
    return <span key={i}>{part}</span>;
  });
}

// ── Block renderers ──────────────────────────────────────────────────────────
function BulletList({ items }: { items: BulletItem[] }) {
  return (
    <ul className="space-y-1.5 mt-2">
      {items.map((item, i) => (
        <li key={i}>
          <div className="flex items-start gap-2">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
            <span className={`text-sm leading-relaxed ${item.bold ? "font-semibold text-foreground" : "text-foreground/85"}`}>
              {parseInline(item.text)}
            </span>
          </div>
          {item.sub && item.sub.length > 0 && (
            <ul className="ml-5 mt-1 space-y-1">
              {item.sub.map((s, j) => (
                <li key={j} className="flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-foreground/40 shrink-0" />
                  <span className="text-sm text-foreground/75 leading-relaxed">{parseInline(s)}</span>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

function BlockRenderer({ block }: { block: NoteBlock }) {
  switch (block.kind) {
    case "intro":
      return <p className="text-sm text-foreground/80 leading-relaxed">{parseInline(block.text)}</p>;

    case "definition":
      return (
        <div className="border-l-4 border-primary bg-primary/5 rounded-r-xl px-4 py-3 my-2">
          <span className="font-bold text-primary text-sm">{block.term}</span>
          <span className="text-sm text-foreground/80"> — {parseInline(block.definition)}</span>
        </div>
      );

    case "keyterms":
      return (
        <div className="bg-muted/40 rounded-xl p-4 my-2 space-y-2">
          {block.terms.map((t, i) => (
            <div key={i} className="flex gap-2 text-sm">
              <span className="font-bold text-primary shrink-0">— {t.label}:</span>
              <span className="text-foreground/80">{parseInline(t.value)}</span>
            </div>
          ))}
        </div>
      );

    case "bullets":
      return <BulletList items={block.items} />;

    case "numbered":
      return (
        <ol className="space-y-1.5 mt-2 list-decimal list-inside">
          {block.items.map((item, i) => (
            <li key={i} className="text-sm text-foreground/85 leading-relaxed">{parseInline(item)}</li>
          ))}
        </ol>
      );

    case "equation":
      return (
        <div className="bg-lavender-soft/50 border border-lavender/20 rounded-xl px-4 py-3 my-2 text-center">
          <p className="text-xs text-lavender font-semibold uppercase tracking-wide mb-1">{block.label}</p>
          <p className="font-mono text-lg font-bold text-foreground">{block.formula}</p>
          {block.note && <p className="text-xs text-foreground/60 mt-1">{block.note}</p>}
        </div>
      );

    case "table":
      return (
        <div className="overflow-x-auto rounded-xl border border-border my-2">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/60">
                {block.headers.map((h, i) => (
                  <th key={i} className="text-left px-3 py-2 font-semibold text-foreground/70 border-b border-border text-xs">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri} className="border-b border-border last:border-0 hover:bg-muted/20">
                  {row.map((cell, ci) => (
                    <td key={ci} className={`px-3 py-2 text-foreground/80 text-xs ${ci === 0 ? "font-semibold" : ""}`}>
                      {parseInline(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "image":
      if (block.side === "full") {
        return (
          <div className="my-3 rounded-xl overflow-hidden border border-border bg-muted/20">
            <img src={block.src} alt={block.caption} className="w-full object-contain max-h-64" />
            <p className="text-xs text-foreground/50 text-center px-3 py-2 italic border-t border-border">{block.caption}</p>
          </div>
        );
      }
      // side images are handled by the page layout
      return null;

    case "tip":
      return (
        <div className="flex gap-3 bg-amber-50 border-l-4 border-amber-400 rounded-r-xl px-4 py-3 my-2">
          <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <p className="text-sm text-amber-900 leading-relaxed">{parseInline(block.text)}</p>
        </div>
      );

    case "warning":
      return (
        <div className="flex gap-3 bg-red-50 border-l-4 border-red-400 rounded-r-xl px-4 py-3 my-2">
          <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
          <p className="text-sm text-red-900 leading-relaxed">{parseInline(block.text)}</p>
        </div>
      );

    case "comparison":
      return (
        <div className="grid grid-cols-2 gap-3 my-2">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
            <p className="text-xs font-bold text-blue-700 mb-2">{block.left.label}</p>
            <ul className="space-y-1">
              {block.left.items.map((item, i) => (
                <li key={i} className="flex items-start gap-1.5 text-xs text-blue-900">
                  <span className="mt-1 w-1 h-1 rounded-full bg-blue-500 shrink-0" />
                  {parseInline(item)}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-pink-50 border border-pink-200 rounded-xl p-3">
            <p className="text-xs font-bold text-pink-700 mb-2">{block.right.label}</p>
            <ul className="space-y-1">
              {block.right.items.map((item, i) => (
                <li key={i} className="flex items-start gap-1.5 text-xs text-pink-900">
                  <span className="mt-1 w-1 h-1 rounded-full bg-pink-500 shrink-0" />
                  {parseInline(item)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      );

    case "highlight": {
      const colorMap = {
        pink: "bg-primary/10 border-primary/30 text-primary",
        blue: "bg-blue-50 border-blue-300 text-blue-800",
        green: "bg-emerald-50 border-emerald-300 text-emerald-800",
        yellow: "bg-amber-50 border-amber-300 text-amber-800",
      };
      const cls = colorMap[block.color ?? "pink"];
      return (
        <div className={`border rounded-xl px-4 py-3 my-2 text-sm font-medium leading-relaxed ${cls}`}>
          {parseInline(block.text)}
        </div>
      );
    }

    default:
      return null;
  }
}

// ── Page layout — handles side images ────────────────────────────────────────
function PageLayout({ page }: { page: NotePage }) {
  const sideImages = page.blocks.filter(
    (b): b is Extract<NoteBlock, { kind: "image" }> =>
      b.kind === "image" && (b.side === "right" || b.side === "left")
  );
  const mainBlocks = page.blocks.filter(
    (b) => !(b.kind === "image" && (b.side === "right" || b.side === "left"))
  );

  return (
    <div className={sideImages.length > 0 ? "md:grid md:grid-cols-[1fr_180px] gap-4 items-start" : ""}>
      <div className="space-y-3">
        {mainBlocks.map((block, i) => (
          <BlockRenderer key={i} block={block} />
        ))}
      </div>
      {sideImages.length > 0 && (
        <div className="space-y-3 mt-3 md:mt-0">
          {sideImages.map((img, i) => (
            <div key={i} className="rounded-xl overflow-hidden border border-border bg-muted/20">
              <img src={img.src} alt={img.caption} className="w-full object-contain" />
              <p className="text-[10px] text-foreground/50 text-center px-2 py-1.5 italic border-t border-border leading-tight">
                {img.caption}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Main NoteRenderer component ───────────────────────────────────────────────
export function NoteRenderer({ chapter }: { chapter: NoteChapter }) {
  const [pageIndex, setPageIndex] = useState(0);
  const total = chapter.pages.length;
  const page = chapter.pages[pageIndex];

  return (
    <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-muted/30 border-b border-border px-5 py-3 flex items-center justify-between">
        <div>
          <p className="text-xs text-foreground/50 font-medium uppercase tracking-wide">{chapter.subject}</p>
          <h2 className="font-bold text-sm text-foreground">{chapter.title}</h2>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold text-foreground/60 bg-muted rounded-full px-3 py-1">
            {pageIndex + 1} of {total}
          </span>
        </div>
      </div>

      {/* Section title */}
      <div className="px-5 pt-4 pb-2 border-b border-border/50">
        <h3 className="font-bold text-base text-foreground underline decoration-primary/40 underline-offset-2">
          {page.section}
        </h3>
      </div>

      {/* Content */}
      <div className="px-5 py-4 min-h-[400px]">
        <PageLayout page={page} />
      </div>

      {/* Navigation */}
      <div className="border-t border-border px-5 py-3 flex items-center justify-between bg-muted/20">
        <button
          onClick={() => setPageIndex(Math.max(0, pageIndex - 1))}
          disabled={pageIndex === 0}
          className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-border text-sm font-semibold disabled:opacity-40 hover:bg-muted/50 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" /> Previous
        </button>

        {/* Page dots */}
        <div className="flex gap-1.5">
          {chapter.pages.map((_, i) => (
            <button
              key={i}
              onClick={() => setPageIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === pageIndex ? "bg-primary w-4" : "bg-border hover:bg-primary/40"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => setPageIndex(Math.min(total - 1, pageIndex + 1))}
          disabled={pageIndex === total - 1}
          className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-border text-sm font-semibold disabled:opacity-40 hover:bg-muted/50 transition-colors"
        >
          Next <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
