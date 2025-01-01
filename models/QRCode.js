module.exports = (sequelize, DataTypes) => {
    const QRCode = sequelize.define('QRCode', {
      code: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      description: {
        type: DataTypes.STRING,
      },
    });
  
    QRCode.associate = function (models) {
      QRCode.hasMany(models.Attendance); // Relation avec Attendance
    };
  
    return QRCode;
  };
  