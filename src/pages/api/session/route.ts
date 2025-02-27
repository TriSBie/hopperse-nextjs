import { parse } from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';

interface Session {
  userId: number;
  email: string;
  expires: Date;
  rememberMe: boolean;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Get the session cookie from request headers
  const cookie = req.headers.cookie;
  if (!cookie) {
    return res.status(200).json({ session: null });
  }

  // Parse cookies to find the session cookie
  const cookies = parse(cookie);
  const sessionCookie = cookies.session;
  if (!sessionCookie) {
    return res.status(200).json({ session: null });
  }

  try {
    const session: Session = JSON.parse(sessionCookie);
    return res.status(200).json({ session });
  } catch (error) {
    console.error('Error parsing session cookie:', error);
    return res.status(200).json({ session: null, error: 'Invalid session' });
  }
}
