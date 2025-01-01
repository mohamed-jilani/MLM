const sequelize = require('../../config/database');

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connexion à la base de données réussie !');
  } catch (error) {
    console.error('Impossible de se connecter à la base de données :', error);
  } finally {
    await sequelize.close(); // Ferme la connexion après le test
  }
};

testConnection();
