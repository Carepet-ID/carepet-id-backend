"use strict";
const bcrypt = require("bcrypt");

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
    const salt = await bcrypt.genSalt(10);
    const userPassword = await bcrypt.hash("user", salt);
    const adminPassword = await bcrypt.hash("admin", salt);

    await queryInterface.bulkInsert("Users", [
      {
        id: "9772fd0f-892e-43f3-94e2-2786e85bf1f5",
        photo:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username: "user",
        email: "user@gmail.com",
        password: userPassword,
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "7b0bc1e8-97a5-415d-b904-9e62701f0ed2",
        photo:
          "https://images.unsplash.com/photo-1500048993953-d23a436266cf?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username: "user2",
        email: "user2@gmail.com",
        password: userPassword,
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "50e00aad-b99b-4205-b8db-226eaca0c491",
        photo:
          "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username: "admin",
        email: "admin@gmail.com",
        password: adminPassword,
        role: "admin",
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
    await queryInterface.bulkDelete("Users", null, {});
  },
};
