"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsToMany(models.Disease, {
        through: "DiseaseProduct",
        foreignKey: "productId",
        as: "diseases",
      });
    }
  }
  Product.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      photo: DataTypes.STRING,
      name: DataTypes.STRING,
      category: DataTypes.STRING,
      price: DataTypes.INTEGER,
      linkStore: DataTypes.STRING,
    },
    {
      sequelize,
      timestamps: false,
      modelName: "Product",
    }
  );
  return Product;
};
