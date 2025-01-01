const db = require('../../models');

const seedData = async () => {
  try {
    await db.sequelize.sync();

    // Création d'un employé
    const employee = await db.Employee.create({
      firstName: 'John',
      lastName: 'Doe',
      phoneNumber: '123456789',
      email: 'john.doe@example.com',
      address: '123 Main St',
      jobTitle: 'Developer',
      hourlyRate: 25.5,
    });

    // Création d'un pointage
    const attendance = await db.Attendance.create({
      clockInTime: new Date(),
      latitude: 37.7749,
      longitude: -122.4194,
      EmployeeId: employee.id, // Lien avec l'employé
    });

    console.log('Données ajoutées avec succès !');
  } catch (error) {
    console.error('Erreur lors de l’ajout des données :', error);
  } finally {
    await db.sequelize.close();
  }
};

seedData();
