import ExceptionEnum, { getExceptionCode } from './exception-enum';

/**
 * Classe de exceções customizadas
 *
 * @author Bruno Eduardo <bruno.soares@kepha.com.br>
 * @class CustomException
 */
class CustomException {
  /**
   * Mensagem do erro
   */
  public message: string;

  /**
   * Código do erro
   */
  public code: string;

  /**
   * Cria uma instância da Exception e inicia as propriedades
   *
   * @param {ExceptionEnum} exception - Exceção
   */
  public constructor(exception: ExceptionEnum) {
    this.message = exception;
    this.code = getExceptionCode(exception);
  }
}

export default CustomException;
