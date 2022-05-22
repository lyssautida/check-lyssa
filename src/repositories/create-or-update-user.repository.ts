import { randomUUID } from 'crypto';
import prisma from '../database';

interface UserProps {
  username: string;
  avatar_url: string;
  github_token: string;
}

class CreateOrUpdateUserRepository {
  async execute(user: UserProps) {
    await prisma.user.upsert({
      where: {
        username: user.username,
      },
      create: {
        id: randomUUID(),
        avatarUrl: user.avatar_url,
        githubToken: user.github_token,
        username: user.username,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      update: {
        avatarUrl: user.avatar_url,
        githubToken: user.github_token,
        username: user.username,
        updatedAt: new Date(),
      },
    });
  }
}

export default new CreateOrUpdateUserRepository();
