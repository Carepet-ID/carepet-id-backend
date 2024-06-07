"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Disease extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Disease.hasMany(models.Prediction, {
        foreignKey: "diseaseId",
        as: "predictions",
      });

      Disease.belongsToMany(models.Product, {
        through: "DiseaseProduct",
        foreignKey: "diseaseId",
        as: "products",
      });
    }
  }
  Disease.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      photo: DataTypes.STRING,
      name: DataTypes.STRING,
      category: DataTypes.STRING,
      description: DataTypes.TEXT,
      symptoms: DataTypes.STRING,
      treatment: DataTypes.TEXT,
    },
    {
      sequelize,
      timestamps: false,
      modelName: "Disease",
    }
  );
  return Disease;
};
