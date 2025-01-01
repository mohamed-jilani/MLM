const db = require('../../models');

const syncModels = async () => {
  try {
    await db.sequelize.sync({ force: true }); // Utilise { alter: true } pour ajuster sans tout supprimer
    console.log('Les modèles ont été synchronisés avec la base de données !');
  } catch (error) {
    console.error('Erreur lors de la synchronisation des modèles :', error);
  } finally {
    await db.sequelize.close();
  }
};

syncModels();
