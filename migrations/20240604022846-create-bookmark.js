"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Bookmarks", {
      userId: {
        allowNull: false,
        type: Sequelize.UUID,
      },
      articleId: {
        allowNull: false,
        type: Sequelize.UUID,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Bookmarks");
  },
};
