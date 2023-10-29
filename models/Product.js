// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id: {
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true, 
      autoIncrement: true, 
    },
    product_name: {
      type: DataTypes.STRING, 
      allowNull: false, // Does not allow null values
    },
    price: {
      type: DataTypes.DECIMAL(10, 2), 
      allowNull: false, // Does not allow null values
      validate: {
        isDecimal: true, // Ensure that the value is a decimal number
      },
    },
    stock: {
      type: DataTypes.INTEGER, // Data type for the column (integer)
      allowNull: false, // Does not allow null values
      defaultValue: 10,
      validate: {
        isInt: {
          msg: 'Stock must be an integer', // Custom error message
        },
      },
    },
    category_id: {
      type: DataTypes.INTEGER, 
      references: {
        model: 'category', 
        key: 'id', 
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
