import { IUserRepository } from '@/features/auth/domain/repositories/userRepository.interface';

export class SignUpUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(email: string, password: string): Promise<void> {
    await this.userRepository.createUser({ email, password });
  }
}
