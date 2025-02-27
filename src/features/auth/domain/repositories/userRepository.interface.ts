import type { User, UserInsert } from '@/features/auth/domain/entities/models/user';

export interface IUserRepository {
  findByEmail(email: string): Promise<User | null>;
  createUser(user: { email: string; password: string }): Promise<UserInsert>;
}
