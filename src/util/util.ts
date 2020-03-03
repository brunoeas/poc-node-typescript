import moment, { MomentInput } from 'moment';

/**
 * Converte o parâmetro para uma data formatada
 *
 * @author Bruno Eduardo <bruno.soares@kepha.com.br>
 * @param {MomentInput} value - Valor que vai ser convertido e formatado
 * @returns {string} Data convertida e formatada
 */
function formatDate(value: MomentInput, format: string = 'YYYY-MM-DDTHH:mm:ssZZ'): string {
  return value ? moment(value).format(format) : null;
}

export { formatDate };
