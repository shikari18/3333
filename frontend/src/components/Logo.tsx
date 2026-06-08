import { Link } from "@tanstack/react-router";

export function Logo({ size = 32 }: { size?: number }) {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img
        src="/favicon.ico"
        alt="ExamGlow logo"
        style={{ width: size, height: size }}
        className="rounded-full object-cover"
      />
      <span className="font-display text-xl text-primary">ExamGlow</span>
    </Link>
  );
}
