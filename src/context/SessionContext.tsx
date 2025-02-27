'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { Session } from '@/shared/types';

const SessionContext = createContext<
  | {
      session: Session | null;
      setSession: (session: Session | null) => void;
    }
  | undefined
>(undefined);

export function SessionProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);

  return (
    <SessionContext.Provider value={{ session, setSession }}>{children}</SessionContext.Provider>
  );
}

export function useSessionContext() {
  const context = useContext(SessionContext);
  if (!context) throw new Error('useSessionContext must be used within a SessionProvider');
  return context;
}
