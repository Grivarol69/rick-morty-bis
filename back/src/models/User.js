const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {
     id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
     },
     email: {
      type: DataTypes.STRING,
      isEmail: true,
      unique: true,
      allowNull: false
     },
     password: {
      type: DataTypes.STRING,
      len: [6,10],
      allowNull: false
     }
   }, { timestamps: false });
};
