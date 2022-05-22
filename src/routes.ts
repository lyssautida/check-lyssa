import { Router } from 'express';
import usersController from './controllers/users.controller';

const routes = Router();

routes.get('/', (request, response) => {
  response.json({ ok: true });
});

routes.get('/github/callback', (request, response) => {
  console.log(request.query);
});

routes.post('/users', usersController.create);

export default routes;
