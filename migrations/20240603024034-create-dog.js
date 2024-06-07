"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Dogs", {
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
      about: {
        type: Sequelize.TEXT,
      },
      age: {
        type: Sequelize.INTEGER,
      },
      birthday: {
        type: Sequelize.DATE,
      },
      breed: {
        type: Sequelize.STRING,
      },
      skinColor: {
        type: Sequelize.STRING,
      },
      gender: {
        type: Sequelize.ENUM("male", "female"),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Dogs");
  },
};
