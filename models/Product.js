// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');
const { DECIMAL } = require('sequelize');
const { NUMERIC } = require('sequelize');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id:
    {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_name:
    {
      type: DataTypes.STRING,
      allowNull: false
    },
    price:
    {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate:
      {
        is: DECIMAL
      }
    },
    stock:
    {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate:
      {
        is: NUMERIC
      }
    },
    category_id:
    {
      type: DataTypes.INTEGER
    }
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
