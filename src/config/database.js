const { Sequelize } = require('sequelize');
const path = require('path');

const databasePath = path.join(__dirname, '..', '..', 'database.sqlite');

console.log('📁 BASE DE DATOS:', databasePath);

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: databasePath,
  logging: false,
});

module.exports = sequelize;