import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { getSession, logOut } from "@/api/auth";
import type { User } from "@/api/auth";
import { clearTokens } from "@/lib/api-client";

export type AuthUser = User;

type AuthContextType = {
  user: AuthUser | null;
  loading: boolean;
  setUser: (user: AuthUser | null) => void;
  refresh: () => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  setUser: () => {},
  refresh: async () => {},
  logout: async () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  const refresh = async () => {
    try {
      const { user: u } = await getSession();
      setUser(u);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    await logOut();
    setUser(null);
  };

  // Listen for forced logout (e.g. token refresh failed)
  useEffect(() => {
    const handler = () => {
      clearTokens();
      setUser(null);
    };
    window.addEventListener('eg:logout', handler);
    return () => window.removeEventListener('eg:logout', handler);
  }, []);

  useEffect(() => {
    refresh();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, setUser, refresh, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
