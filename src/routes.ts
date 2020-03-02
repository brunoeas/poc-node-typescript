import UsuarioService from './service/usuario-service';
import Router from './service/index';
import EnderecoService from './service/endereco-service';

/**
 * Rotas/Services da aplicação
 */
const services: Router[] = [UsuarioService, EnderecoService];

export default services;
