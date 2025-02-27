import { NextApiRequest, NextApiResponse } from 'next';
import { serialize, parse } from 'cookie';

interface Session {
  userId: number;
  email: string;
  expires: Date;
  rememberMe: boolean;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Get the session cookie
  const cookie = req.headers.cookie;
  if (!cookie) {
    return res.status(401).json({ error: 'No session' });
  }

  const cookies = parse(cookie);
  const sessionCookie = cookies.session;
  if (!sessionCookie) {
    return res.status(401).json({ error: 'No session' });
  }

  try {
    const sessionData: Session = JSON.parse(sessionCookie);
    if (new Date() > new Date(sessionData.expires)) {
      return res.status(401).json({ error: 'Session expired' });
    }

    // Refresh the session
    const newSession: Session = {
      ...sessionData,
      expires: sessionData.rememberMe
        ? new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours
        : // : new Date(Date.now() + 30 * 60 * 1000), // 30 minutes
          // 3 seconds for testing
          new Date(Date.now() + 3 * 1000), // 3 seconds
    };

    // Set the new session cookie
    res.setHeader(
      'Set-Cookie',
      serialize('session', JSON.stringify(newSession), {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        expires: newSession.expires,
        path: '/',
      }),
    );
    return res.status(200).json({ session: newSession });
  } catch (error) {
    return res.status(500).json({ error: 'Error refreshing session' });
  }
}
