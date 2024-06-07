"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Dog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Dog.belongsToMany(models.User, {
        through: "UserDog",
        foreignKey: "dogId",
      });
    }
  }
  Dog.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      photo: DataTypes.STRING,
      name: DataTypes.STRING,
      about: DataTypes.TEXT,
      age: DataTypes.INTEGER,
      birthday: DataTypes.DATE,
      breed: DataTypes.STRING,
      skinColor: DataTypes.STRING,
      gender: DataTypes.ENUM("male", "female"),
    },
    {
      sequelize,
      modelName: "Dog",
    }
  );
  return Dog;
};
