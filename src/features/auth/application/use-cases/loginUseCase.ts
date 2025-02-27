import { UserRepository } from '@/features/auth/infrastructure/repositories/userRepository';

export class LoginUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(email: string, password: string): Promise<boolean> {
    const user = await this.userRepository.findByEmail(email);
    if (user && user.password === password) {
      return true;
    }
    return false;
  }
}
