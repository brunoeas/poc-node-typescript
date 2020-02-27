import express from 'express';
import cors from 'cors';
import routes from './routes';

/**
 * Classe que inicia o App
 *
 * @author Bruno Eduardo <bruno.soares@kepha.com.br>
 * @class App
 */
class App {
  /**
   * Express
   *
   * @type {express.Application}
   */
  public express: express.Application;

  /**
   * Cria uma intância do App e inicia os middlewares e routes
   */
  public constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }

  /**
   * Middlewares da aplicação
   */
  private middlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
  }

  /**
   * Inicia as Rotas/Endpoints da aplicação
   */
  private routes(): void {
    const router = express.Router();
    routes(router).forEach(route => this.express.use('/', route.getRouter()))
  }
}

export default new App().express;
