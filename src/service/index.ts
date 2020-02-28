import express, { Router } from 'express';

/**
 * Classe modelo para ser extendida pelos Services
 *
 * @author Bruno Eduardo <bruno.soares@kepha.com.br>
 * @class Service
 */
abstract class Service {
  /**
   * Router
   *
   * @protected - Apenas classes que extendem esta podem acessar essa prop diretamente
   * @type {Router}
   */
  protected router: Router;

  /**
   * Construtor padrão passando o Router para ser injetado
   *
   * @param {Router} router - Router para ser injetado
   */
  protected constructor() {
    this.router = express.Router();
  }

  /**
   * Retorna o Router
   *
   * @returns {Router} Router
   */
  public getRouter(): Router {
    return this.router;
  }
}

export default Service;
