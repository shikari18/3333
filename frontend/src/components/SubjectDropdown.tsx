import { useState, useRef, useEffect } from "react";
import { ChevronDown, Search } from "lucide-react";

export function SubjectDropdown({
  value,
  onChange,
  subjects,
  placeholder = "Select Subject...",
  className = "",
  buttonClassName = "rounded-full px-5 py-1.5 text-sm",
}: {
  value: string;
  onChange: (val: string) => void;
  subjects: string[];
  placeholder?: string;
  className?: string;
  buttonClassName?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filtered = subjects.filter((s) =>
    s.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between bg-white border border-border text-foreground font-semibold hover:border-primary/40 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all cursor-pointer ${buttonClassName}`}
      >
        <span className="truncate pr-2">{value || placeholder}</span>
        <ChevronDown className="w-4 h-4 text-foreground/50 shrink-0" />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-full min-w-[280px] bg-white border border-border rounded-2xl shadow-xl z-50 p-3 animate-in fade-in slide-in-from-top-1 duration-200">
          <div className="relative mb-2">
            <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-foreground/40" />
            <input
              type="text"
              placeholder="Search subjects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs border border-border rounded-xl focus:ring-1 focus:ring-primary focus:border-primary outline-none bg-white text-foreground"
              autoFocus
            />
          </div>
          <div className="max-h-60 overflow-y-auto space-y-0.5 custom-scrollbar pr-1">
            <button
              type="button"
              onClick={() => {
                onChange("");
                setIsOpen(false);
                setSearchQuery("");
              }}
              className="w-full text-left px-3 py-1.5 text-xs font-semibold rounded-lg hover:bg-pink-soft/20 text-foreground/60 transition-colors"
            >
              Clear Selection
            </button>
            {filtered.length === 0 ? (
              <p className="text-xs text-foreground/40 text-center py-4">No subjects found</p>
            ) : (
              filtered.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => {
                    onChange(s);
                    setIsOpen(false);
                    setSearchQuery("");
                  }}
                  className={`w-full text-left px-3 py-2 text-xs rounded-xl transition-colors block truncate ${
                    value === s
                      ? "bg-primary text-primary-foreground font-semibold"
                      : "hover:bg-pink-soft/30 text-foreground/80"
                  }`}
                >
                  {s}
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
