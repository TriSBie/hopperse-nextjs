import { SignUpUseCase } from '@/features/auth/application/use-cases/signUpUseCase';
import { UserRepository } from '@/features/auth/infrastructure/repositories/userRepository';

export default async function handler(req: any, res: any) {
  const { email, password } = req.body;
  const userRepository = new UserRepository();
  const signUpUseCase = new SignUpUseCase(userRepository);
  await signUpUseCase.execute(email, password);
  res.status(201).json({ message: 'Đăng ký thành công' });
}
