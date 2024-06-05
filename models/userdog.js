"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserDog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserDog.init(
    {
      userId: {
        type: DataTypes.UUID,
        primaryKey: true,
      },

      dogId: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "UserDog",
    }
  );
  return UserDog;
};
