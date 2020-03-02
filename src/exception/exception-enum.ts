/**
 * Enum de erros tratados
 *
 * @author Bruno Eduardo
 * @enum {number}
 */
enum ExceptionEnum {
  USUARIO_INEXISTENTE = 'Usuário inexistente',
  ENDERECO_INEXISTENTE = 'Endereço inexistente'
}

/**
 * Retorna a key/code da Exception
 *
 * @author Bruno Eduardo <bruno.soares@kepha.com.br>
 * @param {ExceptionEnum} value - Valor que vai ser extraído a key/code
 * @returns {string} Key/code extraído
 */
function getExceptionCode(value: ExceptionEnum): string {
  return Object.keys(ExceptionEnum).filter(item => item === value)[0];
}

export { getExceptionCode };
export default ExceptionEnum;
