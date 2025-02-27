import { NextApiRequest, NextApiResponse } from 'next';
import { serialize, parse } from 'cookie';
import { LoginUseCase } from '@/features/auth/application/use-cases/loginUseCase';
import { UserRepository } from '@/features/auth/infrastructure/repositories/userRepository';

interface Session {
  userId: number;
  email: string;
  expires: Date;
  rememberMe: boolean;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, password, rememberMe } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    const userRepository = new UserRepository();
    const loginUseCase = new LoginUseCase(userRepository);

    const user = await userRepository.verifyPassword(email, password);
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Create session data
    const sessionData: Session = {
      userId: user.id,
      email: user.email,
      expires: rememberMe
        ? new Date(Date.now() + 24 * 60 * 60 * 1000)
        : new Date(Date.now() + 30 * 60 * 1000),
      rememberMe,
    };

    // Set the session cookie

    res.setHeader(
      'Set-Cookie',
      serialize('session', JSON.stringify(sessionData), {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        expires: sessionData.expires,
        path: '/',
      }),
    );

    return res.status(200).json({ message: 'Đăng nhập thành công' });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ error: 'Error logging in' });
  }
}
