import { IUserRepository } from '@/features/auth/domain/repositories/userRepository.interface';
import prisma from '@/infrastructure/database/prisma';
import { User } from '@prisma/client';

export class UserRepository implements IUserRepository {
  async findByEmail(email: string): Promise<User | null> {
    return prisma.user.findUnique({ where: { email } });
  }
  async createUser(user: { email: string; password: string }): Promise<User> {
    return prisma.user.create({ data: user });
  }
}
