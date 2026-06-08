import { Link } from "@tanstack/react-router";
import { Instagram, Twitter, Youtube } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <Logo />
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Your soft-aesthetic companion for IGCSE excellence. Study smarter, not harder, with
            ExamGlow.
          </p>
          <div className="flex gap-3 mt-5 text-muted-foreground">
            <a href="#" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" aria-label="YouTube">
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/notes">Revision Notes</Link>
            </li>
            <li>
              <Link to="/past-papers">Past Papers</Link>
            </li>
            <li>
              <Link to="/flashcards">Flashcards</Link>
            </li>
            <li>
              <Link to="/quizzes">Quizzes</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Subjects</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Biology &amp; Chemistry</li>
            <li>Physics &amp; Maths</li>
            <li>English &amp; Geography</li>
            <li>ICT/Computer Science</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Help Center</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © 2026 ExamGlow. All rights reserved. Made with love for learners.
      </div>
    </footer>
  );
}
