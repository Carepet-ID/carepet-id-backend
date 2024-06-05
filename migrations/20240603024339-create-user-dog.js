"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("UserDogs", {
      userId: {
        allowNull: false,
        type: Sequelize.UUID,
      },
      dogId: {
        allowNull: false,
        type: Sequelize.UUID,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("UserDogs");
  },
};
