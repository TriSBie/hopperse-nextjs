import { SignUpUseCase } from '@/features/auth/application/use-cases/signUpUseCase';
import { UserRepository } from '@/features/auth/infrastructure/repositories/userRepository';
import RESPONSE_CODE from '@/shared/constants/RESPONSE_CODE';
import bcrypt from 'bcrypt';

export default async function handler(req: any, res: any) {
  try {
    const { email, password } = req.body;
    const userRepository = new UserRepository();
    const signUpUseCase = new SignUpUseCase(userRepository);

    const isDuplicatedEmail = await userRepository.findByEmail(email);
    if (isDuplicatedEmail) {
      res.status(RESPONSE_CODE.BAD_REQUEST).json({ message: 'Email đã tồn tại' });
      return;
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    await signUpUseCase.execute(email, hashedPassword);
    res.status(201).json({ message: 'Đăng ký thành công' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Đăng ký thất bại' });
  }
}
