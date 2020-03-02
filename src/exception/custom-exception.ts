import ExceptionEnum, { getExceptionCode } from './exception-enum';

class CustomException {
  /**
   * Mensagem do erro
   */
  public msg: string;

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
    this.msg = exception;
    this.code = getExceptionCode(exception);
  }
}

export default CustomException;
