const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Character', {
      id: {
         type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
      },
      name: {
         type: DataTypes.STRING,
         allowNull: false
      },
      status: {
         type: DataTypes.ENUM("Alive", "Dead", "unknown"),
      },
      species: {
         type: DataTypes.STRING
      },
      gender: {
         type: DataTypes.STRING
      },
      origin: {
         type: DataTypes.STRING
      },
      image: {
         type: DataTypes.STRING,
         isUrl: true
      },
      create: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      }

   }, { timestamps: false });
};
