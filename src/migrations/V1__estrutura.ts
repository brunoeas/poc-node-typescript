import { DataTypes, QueryInterface } from 'sequelize';

/**
 * @author Bruno Eduardo
 * @since 02/03/2020
 */
const migration = {
  up: async (queryInterface: QueryInterface): Promise<void> => {
    try {
      await queryInterface.createTable('usuario', {
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
      });
      return await queryInterface.createTable('endereco', {
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
            model: 'usuario',
            key: 'id_usuario'
          }
        }
      });
    } catch (err) {
      return console.error('> Erro ao fazer Migration: ', err);
    }
  },
  down: (queryInterface: QueryInterface): Promise<void> => {
    return queryInterface
      .dropTable('endereco')
      .then(() => queryInterface.dropTable('usuario'))
      .catch(console.error);
  }
};

export default migration;
