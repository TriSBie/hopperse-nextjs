import { NextApiRequest, NextApiResponse } from 'next';
import { serialize, parse } from 'cookie'; // Use 'cookie' package for cookie serialization

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Get the session cookie
  const cookie = req.headers.cookie;
  if (!cookie) {
    return res.status(401).json({ error: 'No session' });
  }

  // Parse cookies to find the session cookie
  const cookies = parse(cookie);
  const sessionCookie = cookies.session;
  if (!sessionCookie) {
    return res.status(401).json({ error: 'No session' });
  }

  // Delete the session cookie
  res.setHeader(
    'Set-Cookie',
    serialize('session', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      expires: new Date(0), // Expire immediately
    }),
  );

  return res.status(200).json({ message: 'Đăng xuất thành công' });
}
