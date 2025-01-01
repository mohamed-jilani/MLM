const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const db = {};

// Importer les modèles
db.Employee = require('./Employee')(sequelize, DataTypes);
db.Attendance = require('./Attendance')(sequelize, DataTypes);
db.QRCode = require('./QRCode')(sequelize, DataTypes); // Ajoute ce modèle s'il existe

// Configurer les associations
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize; // Ajouter l'instance Sequelize pour une utilisation ultérieure
db.Sequelize = Sequelize;

module.exports = db;
