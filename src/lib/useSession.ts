'use client';

import { Session } from '@/shared/types';
import { useState, useEffect } from 'react';

export function useSession(initialSession: Session | null = null) {
  const [session, setSession] = useState<Session | null>(initialSession);

  useEffect(() => {
    // On the client side, you can’t directly access cookies, but we’ve already passed the initial session from the server
    // You could also fetch the session from an API if needed, but for simplicity, we rely on the server-passed data
    if (initialSession) {
      setSession(initialSession);
    }
  }, []);

  const refreshSession = async () => {
    const res = await fetch('/api/auth/refresh', { method: 'POST' });
    if (res.ok) {
      const data = await res.json();
      setSession(data.session);
    }
  };

  return { session, refreshSession };
}
