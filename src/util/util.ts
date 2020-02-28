import moment, { MomentInput } from 'moment';
import { Response } from 'express';

/**
 * Converte o parâmetro para uma data formatada
 *
 * @author Bruno Eduardo <bruno.soares@kepha.com.br>
 * @param {MomentInput} value - Valor que vai ser convertido e formatado
 * @returns {string} Data convertida e formatada
 */
function formatDate(value: MomentInput): string {
  return value ? moment(value).format('YYYY-MM-DDTHH:mm:ssZZ') : null;
}

/**
 * Trata um erro loggando ele e retornando a Response
 *
 * @author Bruno Eduardo <bruno.soares@kepha.com.br>
 * @param {Response} res - Response
 * @param {*} err - Erro
 * @param {string} [msg='Ocorreu um erro'] - Mensagem de Erro
 */
function handleError(res: Response, err: any, msg: string = 'Ocorreu um erro') {
  console.error(`\n> ${msg}: `, err);
  res.status(400).send({ message: msg, error: err });
}

export { formatDate, handleError };
