import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { getUserProfile } from "@/api/profile";
import type { User } from "@/api/auth";
import { useAuth } from "./auth-context";

// Re-export User as UserProfile for backward compat with yuna components
export type UserProfile = User;

type ProfileContextType = {
  profile: UserProfile | null;
  loading: boolean;
  refresh: () => Promise<void>;
  // Derived helpers used by yuna UI components
  course: string;
  yearGroup: string;
  enrolledSubjects: string[];
};

const DEFAULT_SUBJECTS = ["Biology", "Chemistry", "Physics", "Mathematics"];

const YEAR_LABELS: Record<string, string> = {
  year9: "Year 9",
  year10: "Year 10 (IGCSE)",
  year11: "Year 11 (IGCSE)",
  year12: "Year 12 (A-Level)",
  year13: "Year 13 (A-Level)",
};

const ProfileContext = createContext<ProfileContextType>({
  profile: null,
  loading: true,
  refresh: async () => {},
  course: "Cambridge IGCSE",
  yearGroup: "Year 10 (IGCSE)",
  enrolledSubjects: DEFAULT_SUBJECTS,
});

export function ProfileProvider({ children }: { children: ReactNode }) {
  const { user, loading: authLoading } = useAuth();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  const refresh = async () => {
    if (!user) {
      setLoading(false);
      return;
    }
    try {
      const p = await getUserProfile();
      setProfile(p);
    } catch {
      setProfile(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!authLoading) refresh();
  }, [user, authLoading]);

  // Subjects are now a proper array from the API (not a JSON string)
  const enrolledSubjects: string[] = (() => {
    if (!profile?.subjects) return DEFAULT_SUBJECTS;
    if (Array.isArray(profile.subjects) && profile.subjects.length > 0) {
      return profile.subjects;
    }
    // Fallback: try to parse if it somehow arrived as a string
    try {
      const parsed = JSON.parse(profile.subjects as unknown as string);
      return Array.isArray(parsed) && parsed.length > 0 ? parsed : DEFAULT_SUBJECTS;
    } catch {
      return DEFAULT_SUBJECTS;
    }
  })();

  return (
    <ProfileContext.Provider
      value={{
        profile,
        loading,
        refresh,
        course: profile?.course ?? "Cambridge IGCSE",
        yearGroup: YEAR_LABELS[profile?.year_group ?? ""] ?? "IGCSE",
        enrolledSubjects,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  return useContext(ProfileContext);
}
