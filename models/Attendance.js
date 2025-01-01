module.exports = (sequelize, DataTypes) => {
    const Attendance = sequelize.define('Attendance', {
      clockInTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      clockOutTime: {
        type: DataTypes.DATE,
      },
      latitude: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      longitude: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Present',
      },
    });
  
    Attendance.associate = function (models) {
      Attendance.belongsTo(models.Employee);
      Attendance.belongsTo(models.QRCode);
    };
  
    return Attendance;
  };
  