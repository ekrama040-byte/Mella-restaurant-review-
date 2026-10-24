"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { demoUsers, type DemoUser } from "@/components/auth/demo-data";

type AuthSession = {
  userId: string;
  token: string;
};

function readStoredSession(): AuthSession | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return null;
    }

    const parsed = JSON.parse(raw) as Partial<AuthSession>;
    if (parsed.userId && parsed.token) {
      return { userId: parsed.userId, token: parsed.token };
    }
  } catch {
    return null;
  }

  return null;
}

type AuthContextValue = {
  user: DemoUser | null;
  isAuthenticated: boolean;
  isGuest: boolean;
  continueAsGuest: () => void;
  loginAs: (userId: string) => boolean;
  logout: () => void;
};

const STORAGE_KEY = "mella-demo-session";

const AuthContext = createContext<AuthContextValue>({
  user: null,
  isAuthenticated: false,
  isGuest: true,
  continueAsGuest: () => {},
  loginAs: () => false,
  logout: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<AuthSession | null>(() => readStoredSession());

  const user = useMemo(
    () => demoUsers.find((entry) => entry.id === session?.userId) ?? null,
    [session],
  );

  const continueAsGuest = useCallback(() => {
    setSession(null);
    window.localStorage.removeItem(STORAGE_KEY);
  }, []);

  const loginAs = useCallback((userId: string) => {
    const selected = demoUsers.find((user) => user.id === userId);
    if (!selected) {
      return false;
    }

    const nextSession: AuthSession = {
      userId: selected.id,
      token: `demo-token-${selected.id}-${Date.now()}`,
    };

    setSession(nextSession);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextSession));
    return true;
  }, []);

  const logout = useCallback(() => {
    setSession(null);
    window.localStorage.removeItem(STORAGE_KEY);
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      isAuthenticated: Boolean(user && session),
      isGuest: !Boolean(user && session),
      continueAsGuest,
      loginAs,
      logout,
    }),
    [continueAsGuest, loginAs, logout, session, user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
