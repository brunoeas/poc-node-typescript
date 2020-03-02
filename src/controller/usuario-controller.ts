import Usuario from '../models/usuario';
import UsuarioConverter from '../converter/usuario-converter';
import Endereco from '../models/endereco';
import EnderecoConverter from '../converter/endereco-converter';
import { formatDate } from '../util/util';

/**
 * Controller do Usuário
 *
 * @author Bruno Eduardo <bruno.soares@kepha.com.br>
 * @class UsuarioController
 */
class UsuarioController {
  /**
   * Converter do Usuário
   */
  private usuarioConverter = new UsuarioConverter();

  /**
   * Converter do Endereço
   */
  private enderecoConverter = new EnderecoConverter();

  /**
   * Salva um novo Usuário
   *
   * @param {*} dto - DTO do Usuário
   * @returns {Promise<any>} Promise com o Usuário criado
   */
  public async saveUsuario(dto: any): Promise<any> {
    const usuario = this.usuarioConverter.filterPropsDto(dto);
    usuario.idUsuario = null;
    usuario.dtNascimento = formatDate(usuario.dtNascimento, 'YYYY-MM-DD');

    return Usuario.create(usuario).then(data => this.usuarioConverter.ormToDto(data));
  }

  /**
   * Atualiza um Usuário
   *
   * @param {*} dto - DTO do Usuário
   * @returns {Promise<any>} Promise
   */
  public async updateUsuario(dto: any): Promise<void> {
    const usuario = this.usuarioConverter.filterPropsDto(dto);
    usuario.dtNascimento = formatDate(usuario.dtNascimento, 'YYYY-MM-DD');

    const [numberOfAffectedRows] = await Usuario.update(usuario, {
      where: { idUsuario: usuario.idUsuario }
    });

    if (numberOfAffectedRows === 0) {
      throw { code: 'USUARIO_INEXISTENTE', msg: 'Usuário inexistente' };
    }
  }

  /**
   * Deleta um Usuário pelo ID
   *
   * @param {number} id - ID do Usuário
   * @returns {Promise<any>} - Promise void
   */
  public async deleteUsuarioById(id: number): Promise<void> {
    await Endereco.destroy({ where: { idUsuario: id } });
    const numberOfDestroyedRows = await Usuario.destroy({ where: { idUsuario: id } });

    if (numberOfDestroyedRows === 0) {
      throw new Error('Usuário inexistente');
    }
  }

  /**
   * Busca um Usuário pelo ID
   *
   * @param {number} id - ID do Usuário
   * @returns {Promise<any>} Promise com o Usuário
   */
  public async findUsuarioById(id: number): Promise<any> {
    const usuarioORM = await Usuario.findByPk(id, {
      include: [{ model: Endereco, as: 'enderecoList' }]
    });

    const usuarioDTO = this.usuarioConverter.ormToDto(usuarioORM);

    usuarioDTO.enderecoList = this.enderecoConverter.ormListToDtoList(usuarioORM.enderecoList);

    return usuarioDTO;
  }

  /**
   * Retorna todos os Usuário
   *
   * @returns {Promise<any[]>} Uma Promise com todos os Usuários
   */
  public async findAllUsuarios(): Promise<any[]> {
    return Usuario.findAll({ include: [{ model: Endereco, as: 'enderecoList' }] }).then(data =>
      data.map(orm => this.usuarioConverter.ormToDto(orm))
    );
  }
}

export default UsuarioController;
