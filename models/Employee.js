module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define('Employee', {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      address: {
        type: DataTypes.STRING,
      },
      photo: {
        type: DataTypes.STRING,
      },
      jobTitle: {
        type: DataTypes.STRING,
      },
      hourlyRate: {
        type: DataTypes.FLOAT,
      },
    });
  
    Employee.associate = function (models) {
      // Une relation avec les pointages
      Employee.hasMany(models.Attendance);
    };
  
    return Employee;
  };
  