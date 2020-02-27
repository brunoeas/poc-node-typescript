'use strict';

import { Sequelize } from 'sequelize-typescript';

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

const sequelize = new Sequelize({
  ...config,
  database: config.database,
  username: config.username,
  password: config.password,
  models: [`${__dirname}`]
});

export default sequelize;
