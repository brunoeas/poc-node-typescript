import Converter from '.';
import Endereco from '../../models/endereco';
import UsuarioConverter from './usuario-converter';

/**
 * Converter do Endereço
 *
 * @author Bruno Eduardo <bruno.soares@kepha.com.br>
 * @class EnderecoConverter
 * @extends {Converter<Endereco>}
 */
class EnderecoConverter extends Converter<Endereco> {
  /**
   * Converter do Usuário
   */
  private usuarioConverter = new UsuarioConverter();

  /**
   * Converte um DTO para Model/ORM
   */
  public dtoToOrm(dto: any, orm: Endereco = this.getOrmNewInstance()): Endereco {
    orm.idEndereco = dto.idEndereco;
    orm.dsRua = dto.dsRua;
    orm.dsBairro = dto.dsBairro;
    orm.nrEndereco = dto.nrEndereco;
    orm.tpEndereco = dto.tpEndereco;

    return orm;
  }

  /**
   * Converte um Model/ORM para DTO
   */
  public ormToDto(orm: Endereco, dto: any = {}) {
    dto.idEndereco = orm.idEndereco;
    dto.dsRua = orm.dsRua;
    dto.dsBairro = orm.dsBairro;
    dto.nrEndereco = orm.nrEndereco;
    dto.tpEndereco = orm.tpEndereco;

    if (orm.usuario) {
      dto.usuario = this.usuarioConverter.ormToDto(orm.usuario);
    }

    return dto;
  }

  /**
   * Filtra as propriedades do DTO passado por parâmetro
   */
  public filterPropsDto(dto: any): any {
    const { idEndereco, dsRua, dsBairro, nrEndereco, tpEndereco, usuario } = dto;
    return {
      idEndereco,
      dsRua,
      dsBairro,
      nrEndereco,
      tpEndereco,
      usuario,
      idUsuario: usuario ? usuario.idUsuario : null
    };
  }

  /**
   * Retorna uma instância do Model/ORM
   */
  public getOrmNewInstance(): Endereco {
    return new Endereco();
  }
}

export default EnderecoConverter;
