"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DiseaseProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DiseaseProduct.init(
    {
      diseaseId: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      productId: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "DiseaseProduct",
    }
  );
  return DiseaseProduct;
};
