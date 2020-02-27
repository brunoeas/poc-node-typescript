/**
 * Configurações padrões da definição de uma tabela no Sequelize
 */
const defaultConfig = {
  // don't add the timestamp attributes (updatedAt, createdAt)
  timestamps: false,
  // don't use camelcase for automatically added attributes but underscore style
  // so updatedAt will be updated_at
  underscored: true,
  // disable the modification of tablenames; By default, sequelize will automatically
  // transform all passed model names (first parameter of define) into plural.
  // if you don't want that, set the following
  freezeTableName: true
};

/**
 * Retorna as configurações padrões para a definição de uma tabela no Sequelize
 *
 * @author Bruno Eduardo <bruno.soares@kepha.com.br>
 * @param {Object} [additional={}] - Configurações adicionais
 * @returns {Object} Configurações para definição de uma tabela
 */
function getDefaultTableConfig(additional = {}) {
  return { ...defaultConfig, ...additional };
}

export default getDefaultTableConfig;
