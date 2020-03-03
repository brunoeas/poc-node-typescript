import { Request, Response, NextFunction } from 'express';
import Service from './index';
import UsuarioController from '../controller/usuario-controller';

/**
 * Service do Usuário
 *
 * @author Bruno Eduardo <bruno.soares@kepha.com.br>
 * @class UsuarioService
 * @extends {Service}
 */
class UsuarioService extends Service {
  /**
   * Controller do Usuário
   */
  private usuarioController = new UsuarioController();

  /**
   * Cria uma instância do Service do Usuário e setta os Endpoints
   */
  public constructor() {
    super();

    this.saveUsuario = this.saveUsuario.bind(this);
    this.findAllUsuarios = this.findAllUsuarios.bind(this);
    this.updateUsuario = this.updateUsuario.bind(this);
    this.deleteUsuarioById = this.deleteUsuarioById.bind(this);
    this.findUsuarioById = this.findUsuarioById.bind(this);

    this.router.get('/usuario', this.findAllUsuarios);
    this.router.get('/usuario/:id', this.findUsuarioById);
    this.router.post('/usuario', this.saveUsuario);
    this.router.put('/usuario', this.updateUsuario);
    this.router.delete('/usuario/:id', this.deleteUsuarioById);
  }

  /**
   * Enpoint para retornar todos os Usuários
   *
   * @private
   * @param {Request} req - Request
   * @param {Response} res - Response
   * @param {NextFunction} next - Função Next
   */
  private findAllUsuarios(req: Request, res: Response, next: NextFunction): void {
    this.usuarioController
      .findAllUsuarios()
      .then(usuarios => res.send(usuarios))
      .catch(next);
  }

  /**
   * Endpoint para buscar Usuário pelo ID
   *
   * @private
   * @param {Request} req - Request
   * @param {Response} res - Response
   * @param {NextFunction} next - Função Next
   */
  private findUsuarioById(req: Request, res: Response, next: NextFunction): void {
    this.usuarioController
      .findUsuarioById(+req.params.id)
      .then(data => res.send(data))
      .catch(next);
  }

  /**
   * Endpoint para salvar um novo Usuário
   *
   * @private
   * @param {Request} req - Request
   * @param {Response} res - Response
   * @param {NextFunction} next - Função Next
   */
  private saveUsuario(req: Request, res: Response, next: NextFunction): void {
    this.usuarioController
      .saveUsuario(req.body)
      .then(usuario => res.send(usuario))
      .catch(next);
  }

  /**
   * Endpoint para atualizar um Usuário
   *
   * @private
   * @param {Request} req - Request
   * @param {Response} res - Response
   * @param {NextFunction} next - Função Next
   */
  private updateUsuario(req: Request, res: Response, next: NextFunction): void {
    this.usuarioController
      .updateUsuario(req.body)
      .then(() => res.send())
      .catch(next);
  }

  /**
   * Endpoint para deletar um Usuário pelo ID
   *
   * @private
   * @param {Request} req - Request
   * @param {Response} res - Response
   * @param {NextFunction} next - Função Next
   */
  private deleteUsuarioById(req: Request, res: Response, next: NextFunction) {
    this.usuarioController
      .deleteUsuarioById(+req.params.id)
      .then(() => res.send())
      .catch(next);
  }
}

export default new UsuarioService();
