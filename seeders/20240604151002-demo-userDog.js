"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert("UserDogs", [
      {
        userId: "9772fd0f-892e-43f3-94e2-2786e85bf1f5",
        dogId: "f22bef3d-b08a-493a-9f69-52d6145ce886",
      },
      {
        userId: "9772fd0f-892e-43f3-94e2-2786e85bf1f5",
        dogId: "7dade957-5ff0-4e5f-9c18-8636ca4f1ca5",
      },
      {
        userId: "7b0bc1e8-97a5-415d-b904-9e62701f0ed2",
        dogId: "a0a86adb-ecd7-4642-90cc-a297654bded1",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
