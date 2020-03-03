import EnderecoConverter from '../converter/endereco-converter';
import Endereco from '../models/endereco';
import Usuario from '../models/usuario';
import CustomException from '../exception/custom-exception';
import ExceptionEnum from '../exception/exception-enum';

/**
 * Controller do Endereço
 *
 * @author Bruno Eduardo <bruno.soares@kepha.com.br>
 * @class EnderecoController
 */
class EnderecoController {
  /**
   * Converter do Endereço
   */
  private enderecoConverter = new EnderecoConverter();

  /**
   * Salva um novo Endereço
   *
   * @param {*} dto - DTO do Endereço
   * @returns {Promise<any>} Promise com o novo Endereço
   */
  public async saveEndereco(dto: any): Promise<any> {
    const endereco = this.enderecoConverter.filterPropsDto(dto);
    endereco.idEndereco = null;

    await this.setUsuarioInEndereco(endereco);

    return Endereco.create(endereco).then(data => this.enderecoConverter.ormToDto(data));
  }

  /**
   * Atualiza um Endereço
   *
   * @param {*} dto - DTO do Endereço
   * @returns {Promise<void>} Promise void
   */
  public async updateEndereco(dto: any): Promise<void> {
    const endereco = this.enderecoConverter.filterPropsDto(dto);

    await this.setUsuarioInEndereco(endereco);

    const [numberOfAffectedRows] = await Endereco.update(endereco, {
      where: { idEndereco: endereco.idEndereco }
    });

    if (numberOfAffectedRows === 0) {
      throw new CustomException(ExceptionEnum.ENDERECO_INEXISTENTE);
    }
  }

  /**
   * Deleta um Endereço pelo ID
   *
   * @param {number} id - ID do Endereço
   * @returns {Promise<void>} Promise void
   */
  public async deleteEnderecoById(id: number): Promise<void> {
    const numberOfDestroyedRows = await Endereco.destroy({ where: { idEndereco: id } });

    if (numberOfDestroyedRows === 0) {
      throw new CustomException(ExceptionEnum.ENDERECO_INEXISTENTE);
    }
  }

  /**
   * Busca todos os Endereços
   *
   * @returns {Promise<any[]>} Promise com todos os Endereços
   */
  public async findAllEnderecos(): Promise<any[]> {
    return Endereco.findAll({ include: [{ model: Usuario, as: 'usuario' }] }).then(data =>
      data.map(orm => this.enderecoConverter.ormToDto(orm))
    );
  }

  /**
   * Busca um Endereço pelo ID
   *
   * @param {number} id - ID do Endereço
   * @returns {Promise<any>} Promise com o Endereço
   */
  public async findEnderecoById(id: number): Promise<any> {
    return Endereco.findByPk(id, { include: [{ model: Usuario, as: 'usuario' }] }).then(orm =>
      this.enderecoConverter.ormToDto(orm)
    );
  }

  /**
   * Busca e setta o Usuário no Endereço
   *
   * @private
   * @param {*} endereco - Endereço que vai ser settado e com o ID do Usuário que vai ser buscado
   * @returns {Promise<void>} Promise void
   */
  private async setUsuarioInEndereco(endereco: any): Promise<void> {
    const usuario: Usuario = await Usuario.findByPk(endereco.usuario.idUsuario);

    if (!usuario) {
      throw new CustomException(ExceptionEnum.USUARIO_INEXISTENTE);
    }

    endereco.usuario = usuario;
    endereco.usuario.idUsuario = usuario.idUsuario;
  }
}

export default EnderecoController;
