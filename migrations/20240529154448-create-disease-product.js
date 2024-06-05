"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("DiseaseProducts", {
      diseaseId: {
        allowNull: false,
        type: Sequelize.UUID,
      },
      productId: {
        allowNull: false,
        type: Sequelize.UUID,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("DiseaseProducts");
  },
};
