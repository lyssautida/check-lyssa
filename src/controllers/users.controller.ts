import { Request, Response } from 'express';
import createOrLoginService from '../services/create-or-login.service';

class UsersController {
  async create(request: Request, response: Response) {
    if (!request.body.code) {
      return response.status(400).json({ error: 'Code is mandatory' });
    }

    const githubCode = request.body.code;

    const result = await createOrLoginService.execute(githubCode);

    if (result.error) {
      return response.status(500).json(result);
    }

    return response.status(200).json(result);
  }
}

export default new UsersController();
