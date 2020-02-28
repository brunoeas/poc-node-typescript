import Service from '.';
import EnderecoController from '../controller/endereco-controller';
import { Response, Request } from 'express';
import { handleError } from '../util/util';

class EnderecoService extends Service {
  private enderecoController = new EnderecoController();

  public constructor() {
    super();

    this.saveEndereco = this.saveEndereco.bind(this);
    this.updateEndereco = this.updateEndereco.bind(this);
    this.deleteEndereco = this.deleteEndereco.bind(this);
    this.findEnderecoById = this.findEnderecoById.bind(this);
    this.findAll = this.findAll.bind(this);

    this.router.post('/endereco', this.saveEndereco);
    this.router.put('/endereco', this.updateEndereco);
    this.router.delete('/endereco/:id', this.deleteEndereco);
    this.router.get('/endereco/:id', this.findEnderecoById);
    this.router.get('/endereco', this.findAll);
  }

  /**
   * Endpoint para salvar um novo Endereço
   *
   * @private
   * @param {Request} req - Request
   * @param {Response} res - Response
   */
  private saveEndereco(req: Request, res: Response): void {
    this.enderecoController
      .saveEndereco(req.body)
      .then(data => res.send(data))
      .catch(err => handleError(res, err));
  }

  private updateEndereco(req: Request, res: Response): void {
    this.enderecoController
      .updateEndereco(req.body)
      .then(() => res.send())
      .catch(err => handleError(res, err));
  }

  private deleteEndereco(req: Request, res: Response): void {
    this.enderecoController
      .deleteEnderecoById(+req.params.id)
      .then(() => res.send())
      .catch(err => handleError(res, err));
  }

  private findEnderecoById(req: Request, res: Response): void {
    this.enderecoController
      .findEnderecoById(+req.params.id)
      .then(data => res.send(data))
      .catch(err => handleError(res, err));
  }

  private findAll(req: Request, res: Response): void {
    this.enderecoController
      .findAllEnderecos()
      .then(data => res.send(data))
      .catch(err => handleError(res, err));
  }
}

export default EnderecoService;
