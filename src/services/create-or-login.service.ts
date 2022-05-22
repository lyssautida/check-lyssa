import axios from 'axios';
import createOrUpdateUserRepository from '../repositories/create-or-update-user.repository';

class CreateOrLoginService {
  async execute(githubCode: string) {
    try {
      const { data: responseAuth } = await axios.post(
        `https://github.com/login/oauth/access_token?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_SECRET}&code=${githubCode}`,
        null,
        {
          headers: {
            accept: 'application/json',
          },
        },
      );

      const { data: githubUser } = await axios.get(
        'https://api.github.com/user',
        {
          headers: {
            Authorization: `Bearer ${responseAuth.access_token}`,
          },
        },
      );

      await createOrUpdateUserRepository.execute({
        username: githubUser.login,
        avatar_url: githubUser.avatar_url,
        github_token: responseAuth.access_token,
      });

      return {
        avatar_url: githubUser.avatar_url,
      };
    } catch (error) {
      return {
        error: 'Algo deu errado, isso é tudo que sabemos',
      };
    }
  }
}

export default new CreateOrLoginService();
