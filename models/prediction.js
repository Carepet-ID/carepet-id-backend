"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Prediction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Prediction.belongsTo(models.Disease, {
        foreignKey: "diseaseId",
        as: "disease",
      });
    }
  }
  Prediction.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      photo: DataTypes.STRING,
      name: DataTypes.STRING,
      accuracy: DataTypes.FLOAT,
      diseaseId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Diseases",
          key: "id",
        },
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "Prediction",
    }
  );
  return Prediction;
};
