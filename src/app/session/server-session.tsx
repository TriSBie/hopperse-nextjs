import { cookies } from 'next/headers';
import { Session } from '@/shared/types';

export default async function ServerSession({
  children,
}: {
  children: (session: Session | null) => React.ReactNode;
}) {
  const sessionCookie = (await cookies()).get('session');

  let session: Session | null = null;
  if (sessionCookie) {
    try {
      session = JSON.parse(sessionCookie.value);
    } catch (error) {
      console.error('Error parsing session cookie:', error);
    }
  }

  return children(session);
}
