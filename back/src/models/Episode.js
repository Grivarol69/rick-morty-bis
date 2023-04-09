const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define("Episode", {
    id: {
      type: DataTypes.INTEGER,
      increment: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
}