import { NextApiRequest, NextApiResponse } from 'next';
import { SignUpUseCase } from '@/features/auth/application/use-cases/signUpUseCase';
import { UserRepository } from '@/features/auth/infrastructure/repositories/userRepository';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    const userRepository = new UserRepository();
    const signUpUseCase = new SignUpUseCase(userRepository);

    await signUpUseCase.execute(email, password);
    res.status(201).json({ message: 'Đăng ký thành công' });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ error: 'Error registering user' });
  }
}
