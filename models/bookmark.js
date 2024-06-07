"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Bookmark extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Bookmark.belongsTo(models.Article, { foreignKey: "articleId" });
      Bookmark.belongsTo(models.User, { foreignKey: "userId" });
    }
  }
  Bookmark.init(
    {
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      articleId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "Bookmark",
    }
  );
  return Bookmark;
};
