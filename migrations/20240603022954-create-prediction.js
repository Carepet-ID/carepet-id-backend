"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Predictions", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      photo: {
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      accuracy: {
        type: Sequelize.FLOAT,
      },
      diseaseId: {
        allowNull: false,
        type: Sequelize.UUID,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Predictions");
  },
};
