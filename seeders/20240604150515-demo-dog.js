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
    await queryInterface.bulkInsert("Dogs", [
      {
        id: "f22bef3d-b08a-493a-9f69-52d6145ce886",
        photo:
          "https://petlandbradenton.com/wp-content/uploads/2023/03/2383894_800-600x450.jpg",
        name: "Max",
        about: "A loyal and energetic German Shepherd",
        age: 7,
        birthday: "2017-12-24",
        breed: "German Shepherd",
        skinColor: "Black and Tan",
        gender: "male",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "7dade957-5ff0-4e5f-9c18-8636ca4f1ca5",
        photo:
          "https://blog-pawsafe.b-cdn.net/wp-content/uploads/moyen-poodle.png",
        name: "Bella",
        about: "A friendly and cuddly Poodle",
        age: 4,
        birthday: "2020-05-15",
        breed: "Poodle",
        skinColor: "White",
        gender: "female",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "a0a86adb-ecd7-4642-90cc-a297654bded1",
        photo:
          "https://www.vidavetcare.com/wp-content/uploads/sites/234/2022/04/golden-retriever-dog-breed-info.jpeg",
        name: "Buddy",
        about: "A playful Golden Retriever puppy",
        age: 2,
        birthday: "2022-01-01",
        breed: "Golden Retriever",
        skinColor: "Golden",
        gender: "male",
        createdAt: new Date(),
        updatedAt: new Date(),
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
    await queryInterface.bulkDelete("Dogs", null, {});
  },
};
