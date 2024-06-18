module.exports = (sequelize, DataTypes) => {
    const Ekspedisi = sequelize.define('Ekspedisi', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING
      }
    });
    return Ekspedisi;
  };
  