import Converter from '.';
import Usuario from '../models/usuario';
import { formatDate } from '../util/util';

/**
 * Converter do Usuário
 *
 * @author Bruno Eduardo <bruno.soares@kepha.com.br>
 * @class UsuarioConverter
 * @extends {Converter<Usuario>}
 */
class UsuarioConverter extends Converter<Usuario> {
  /**
   * Converte um DTO para Model/ORM
   */
  public dtoToOrm(dto: any, orm: Usuario = this.getOrmNewInstance()): Usuario {
    orm.idUsuario = dto.idUsuario;
    orm.nmUsuario = dto.nmUsuario;
    orm.dtNascimento = formatDate(dto.dtNascimento, 'YYYY-MM-DD');

    return orm;
  }

  /**
   * Converte um Model/ORM para DTO
   */
  public ormToDto(orm: Usuario, dto: any = {}) {
    dto.idUsuario = orm.idUsuario;
    dto.nmUsuario = orm.nmUsuario;
    dto.dtNascimento = formatDate(orm.dtNascimento, 'YYYY-MM-DD');

    return dto;
  }

  /**
   * Filtra as propriedades do DTO passado por parâmetro
   */
  public filterPropsDto(dto: any) {
    const { idUsuario, nmUsuario, dtNascimento } = dto;
    return { idUsuario, nmUsuario, dtNascimento };
  }

  /**
   * Retorna uma nova instância do Model/ORM
   */
  public getOrmNewInstance(): Usuario {
    return new Usuario();
  }
}

export default UsuarioConverter;
