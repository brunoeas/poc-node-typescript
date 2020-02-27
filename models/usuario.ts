import getDefaultTableConfig from '../config/default-table-config';
import { Table, Column, DataType, AutoIncrement, PrimaryKey } from 'sequelize-typescript';
import { Model } from 'sequelize/types';

/**
 * Modelo do Usuário
 *
 * @author Bruno Eduardo <bruno.soares@kepha.com.br>
 * @class Usuario
 */
@Table(getDefaultTableConfig())
class Usuario extends Model<Usuario> {
  /**
   * ID
   *
   * @type {number}
   */
  @PrimaryKey
  @AutoIncrement
  @Column({ field: 'id_usuario', type: DataType.INTEGER, allowNull: false })
  public idUsuario: number;

  /**
   * Nome
   *
   * @type {string}
   */
  @Column({ field: 'nm_usuario', allowNull: false, type: DataType.STRING })
  public nmUsuario: string;

  /**
   * Data de nascimento
   *
   * @type {string}
   */
  @Column({ field: 'dt_nascimento', type: DataType.DATE })
  public dtNascimento: string;

  /**
   * Cria uma instância do UsuárioModel e inicia suas propriedades
   *
   * @author Bruno Eduardo <bruno.soares@kepha.com.br>
   * @param {*} [params={}] - Parâmetros para iniciar as propriedades do modelo
   */
  public constructor(params: any = {}) {
    super();
    const { idUsuario, nmUsuario, dtNascimento } = params;

    this.idUsuario = idUsuario;
    this.nmUsuario = nmUsuario;
    this.dtNascimento = dtNascimento;
  }

  static getEntity() {}
}

export default Usuario;
