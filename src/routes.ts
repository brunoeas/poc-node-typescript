import UsuarioService from './service/usuario-service';
import Router from './service/index';
import EnderecoService from './service/endereco-service';

/**
 * Rotas/Services da aplicação
 */
const services: Router[] = [new UsuarioService(), new EnderecoService()];

/**
 * Inicia as Rotas/Services da aplicação
 *
 * @author Bruno Eduardo <bruno.soares@kepha.com.br>
 * @returns {Router[]} - Lista de Rotas com os Endpoints definidos
 */
function getRoutes(): Router[] {
  return services;
}

export default getRoutes;
