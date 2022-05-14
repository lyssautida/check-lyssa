import express, { Express } from 'express';
import helmet from 'helmet';
import cors from 'cors';

class App {
  app: Express;

  constructor() {
    this.app = express();
    this.middlewares();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(helmet());
  }
}

export default new App().app;
