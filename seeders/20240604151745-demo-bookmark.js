"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Bookmarks", [
      {
        articleId: "879f4637-2f34-4e89-92b8-c856e95fdc36",
        userId: "9772fd0f-892e-43f3-94e2-2786e85bf1f5",
      },
      {
        articleId: "03dde6ba-0bad-4726-824f-0938a891d276",
        userId: "7b0bc1e8-97a5-415d-b904-9e62701f0ed2",
      },
      {
        articleId: "cf74f5bb-a1ff-48c5-a4e4-d277b3e602fa",
        userId: "7b0bc1e8-97a5-415d-b904-9e62701f0ed2",
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
    return queryInterface.bulkDelete("Bookmarks", null, {});
  },
};
