import { useSession } from 'next-auth/react';

export function useCustomSession() {
  const sessionData = useSession();
  return sessionData;
}
