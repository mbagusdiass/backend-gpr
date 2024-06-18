module.exports = (sequelize, DataTypes) => {
    const Package = sequelize.define('Package', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      senderName: {
        type: DataTypes.STRING
      },
      senderAddress: {
        type: DataTypes.STRING
      },
      receiverName: {
        type: DataTypes.STRING
      },
      receiverAddress: {
        type: DataTypes.STRING
      },
      creationDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      status: {
        type: DataTypes.ENUM,
        values: ['pending', 'in_transit', 'delivered', 'cancelled'],
        allowNull: false
      },
    });
    return Package;
  };
  