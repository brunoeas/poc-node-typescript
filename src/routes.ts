import express from 'express';
import UsuarioService from './service/usuario-service';
import Router from './service';

/**
 * Rotas/Services da aplicação
 */
// const routes: (Router)[] = [new UsuarioService(null)];

/**
 * Inicia as Rotas/Services da aplicação
 *
 * @author Bruno Eduardo <bruno.soares@kepha.com.br>
 * @param {express.Router} router - Router
 * @returns {Router[]} - Lista de Rotas com os Endpoints definidos
 */
function routes(router: express.Router): Router[] {
  return [new UsuarioService(router)];
}

export default routes;
