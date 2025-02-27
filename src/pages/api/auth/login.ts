import { LoginUseCase } from '@/features/auth/application/use-cases/loginUseCase';
import { UserRepository } from '@/features/auth/infrastructure/repositories/userRepository';
import { signIn } from '../../../../auth';

export default async function handler(req: any, res: any) {
  const { email, password } = req.body;
  const userRepository = new UserRepository();
  const loginUseCase = new LoginUseCase(userRepository);
  const isAuthenticated = await loginUseCase.execute(email, password);
  if (isAuthenticated) {
    res.status(200).json({ message: 'Đăng nhập thành công' });
  } else {
    res.status(401).json({ message: 'Sai thông tin đăng nhập' });
  }
}
