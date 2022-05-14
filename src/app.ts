import express, { Express } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import routes from './routes';

class App {
  app: Express;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(helmet());
  }

  routes() {
    this.app.use(routes);
  }
}

export default new App().app;
