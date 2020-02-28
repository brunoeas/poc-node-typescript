import getDefaultTableConfig from '../config/default-table-config';
import { Model, DataTypes } from 'sequelize';
import Usuario from './usuario';
import TipoEnderecoEnum from '../src/enumeration/tipo-endereco-enum';

/**
 * Model do Endereço
 *
 * @author Bruno Eduardo <bruno.soares@kepha.com.br>
 * @class Endereco
 * @extends {Model} - Modelo de entidade do Sequelize
 */
class Endereco extends Model {
  /**
   * ID
   *
   * @type {number}
   */
  public idEndereco: number;

  /**
   * Rua
   *
   * @type {string}
   */
  public dsRua: string;

  /**
   * Número
   *
   * @type {number}
   */
  public nrEndereco: number;

  /**
   * Bairro
   *
   * @type {string}
   */
  public dsBairro: string;

  /**
   * Tipo de Endereço: 0 - Residencial; 1 - Comercial;
   *
   * @type {TipoEnderecoEnum}
   */
  public tpEndereco: TipoEnderecoEnum;

  /**
   * Usuário
   *
   * @type {Usuario}
   */
  public usuario: Usuario;

  /**
   * ID do Usuário
   *
   * @type {number}
   */
  public idUsuario: number;
}

/**
 * Inicia a entidade Endereço
 */
Endereco.init(
  {
    idEndereco: {
      field: 'id_endereco',
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    dsRua: {
      field: 'ds_rua',
      type: DataTypes.STRING,
      allowNull: false
    },
    nrEndereco: {
      field: 'nr_endereco',
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dsBairro: {
      field: 'ds_bairro',
      type: DataTypes.STRING,
      allowNull: false
    },
    tpEndereco: {
      field: 'tp_endereco',
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    idUsuario: {
      field: 'id_usuario',
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Usuario,
        key: 'id_usuario'
      }
    }
  },
  getDefaultTableConfig({ tableName: 'endereco' })
);

Endereco.belongsTo(Usuario, { foreignKey: 'idUsuario', as: 'usuario' });
Usuario.hasMany(Endereco, { foreignKey: 'idUsuario', as: 'enderecoList' });

// Endereco.sync({ alter: true });

export default Endereco;
