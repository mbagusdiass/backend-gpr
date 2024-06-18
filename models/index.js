const { Sequelize, DataTypes } = require('sequelize');
const dbConfig = require('../config/db.config.js');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: dbConfig.pool
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Package = require('./package.model.js')(sequelize, DataTypes);
db.Ekspedisi = require('./ekspedisi.model.js')(sequelize, DataTypes);

db.Ekspedisi.hasMany(db.Package, { foreignKey: 'ekspedisiId' });
db.Package.belongsTo(db.Ekspedisi, { foreignKey: 'ekspedisiId' });

module.exports = db;
