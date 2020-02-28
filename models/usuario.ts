import getDefaultTableConfig from '../config/default-table-config';
import { Model, DataTypes } from 'sequelize';
import Endereco from './endereco';

/**
 * Modelo do Usuário
 *
 * @author Bruno Eduardo <bruno.soares@kepha.com.br>
 * @class Usuario
 * @extends {Model} - Modelo de entidade do Sequelize
 */
class Usuario extends Model {
  /**
   * ID
   *
   * @type {number}
   */
  public idUsuario: number;

  /**
   * Nome
   *
   * @type {string}
   */
  public nmUsuario: string;

  /**
   * Data de nascimento
   *
   * @type {string}
   */
  public dtNascimento: string;

  /**
   * Lista de Endereços
   *
   * @type {Endereco[]}
   */
  public enderecoList: Endereco[];
}

/**
 * Inicia a entidade Usuário
 */
Usuario.init(
  {
    idUsuario: {
      field: 'id_usuario',
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    nmUsuario: {
      field: 'nm_usuario',
      allowNull: false,
      type: DataTypes.STRING
    },
    dtNascimento: {
      field: 'dt_nascimento',
      type: DataTypes.DATE
    }
  },
  getDefaultTableConfig({ tableName: 'usuario' })
);

// Usuario.sync({ alter: true });

export default Usuario;
