import express, { Request, Response } from 'express';
import Service from './index';
import UsuarioController from '../controller/usuario-controller';

/**
 * Service do Usuário
 *
 * @author Bruno Eduardo <bruno.soares@kepha.com.br>
 * @class UsuarioService
 * @extends {Router}
 */
class UsuarioService extends Service {
  /**
   * Controller do Usuário
   */
  private usuarioController = new UsuarioController();

  /**
   * Cria uma instância do Service do Usuário e setta os Endpoints
   *
   * @author Bruno Eduardo <bruno.soares@kepha.com.br>
   * @param {express.Router} router - Router
   */
  public constructor(router: express.Router) {
    super(router);

    this.router.get('/usuario', this.findAllUsuarios);
  }

  /**
   * Enpoint para retornar todos os Usuários
   *
   * @author Bruno Eduardo <bruno.soares@kepha.com.br>
   * @private
   * @param {Request} req - Request
   * @param {Response} res - Response
   */
  private async findAllUsuarios(req: Request, res: Response): Promise<void> {
    const usuarios = await this.usuarioController.findAllUsuarios();
    res.send(usuarios);
  }
}

export default UsuarioService;
