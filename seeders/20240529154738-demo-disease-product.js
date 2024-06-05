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
    await queryInterface.bulkInsert(
      "DiseaseProducts",
      [
        // Products for Dandruff
        {
          diseaseId: "1d2e3f4g-5678-9abc-def0-1234567890ab",
          productId: "1a2b3c4d-5678-9abc-def0-1234567890ab",
        },
        {
          diseaseId: "1d2e3f4g-5678-9abc-def0-1234567890ab",
          productId: "2b3c4d5e-6789-0abc-def1-2345678901bc",
        },
        {
          diseaseId: "1d2e3f4g-5678-9abc-def0-1234567890ab",
          productId: "3c4d5e6f-7890-1abc-def2-3456789012cd",
        },
        {
          diseaseId: "1d2e3f4g-5678-9abc-def0-1234567890ab",
          productId: "4d5e6f7g-8901-2abc-def3-4567890123de",
        },
        {
          diseaseId: "1d2e3f4g-5678-9abc-def0-1234567890ab",
          productId: "5e6f7g8h-9012-3abc-def4-5678901234ef",
        },

        // Products for Dermatitis
        {
          productId: "6f7g8h9i-0123-4abc-def5-6789012345fg",
          diseaseId: "2a3b4c5d-6789-0abc-def1-2345678901bc",
        },
        {
          productId: "7g8h9i0j-1234-5abc-def6-7890123456gh",
          diseaseId: "2a3b4c5d-6789-0abc-def1-2345678901bc",
        },
        {
          productId: "8h9i0j1k-2345-6bcd-def7-8901234567hi",
          diseaseId: "2a3b4c5d-6789-0abc-def1-2345678901bc",
        },
        {
          productId: "9i0j1k2l-3456-7cde-def8-9012345678ij",
          diseaseId: "2a3b4c5d-6789-0abc-def1-2345678901bc",
        },
        {
          diseaseId: "2a3b4c5d-6789-0abc-def1-2345678901bc",
          productId: "0j1k2l3m-4567-8def-def9-0123456789jk",
        },
        // Products for Ear Infection
        {
          productId: "1k2l3m4n-5678-9abc-def0-1234567890lm",
          diseaseId: "3b4c5d6e-7890-1abc-def2-3456789012cd",
        },
        {
          productId: "2l3m4n5o-6789-0bcd-def1-2345678901mn",
          diseaseId: "3b4c5d6e-7890-1abc-def2-3456789012cd",
        },
        {
          productId: "3m4n5o6p-7890-1cde-def2-3456789012no",
          diseaseId: "3b4c5d6e-7890-1abc-def2-3456789012cd",
        },
        {
          productId: "4n5o6p7q-8901-2def-def3-4567890123op",
          diseaseId: "3b4c5d6e-7890-1abc-def2-3456789012cd",
        },
        // Products for Fleas
        {
          productId: "7g8h9i0j-1234-5def-6789-012345abcdef",
          diseaseId: "4c5d6e7f-8901-2abc-def3-4567890123de", // Foreign key referencing Disease (Fleas)
        },
        {
          productId: "8h9i0j1k-2345-6def-7890-123456abcdef",
          diseaseId: "4c5d6e7f-8901-2abc-def3-4567890123de",
        },
        {
          productId: "9i0j1k2l-3456-7def-8901-234567abcdef",
          diseaseId: "4c5d6e7f-8901-2abc-def3-4567890123de",
        },

        // Products for Ringworm
        {
          productId: "0j1k2l3m-4567-8def-9012-345678abcdef",
          diseaseId: "5d6e7f8g-9012-3abc-def4-5678901234ef", // Foreign key referencing Disease (Ringworm)
        },
        {
          productId: "1k2l3m4n-5678-9def-0123-456789abcdef",
          diseaseId: "5d6e7f8g-9012-3abc-def4-5678901234ef",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("DiseaseProducts", null, {});
  },
};
