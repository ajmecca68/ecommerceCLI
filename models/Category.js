const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER, // Data type for the column (integer)
      allowNull: false, // Does not allow null values
      primaryKey: true, // Indicates it's the primary key
      autoIncrement: true, // Automatically increments the value
    },
    category_name: {
      type: DataTypes.STRING, // Data type for the column (string)
      allowNull: false, // Does not allow null values
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
