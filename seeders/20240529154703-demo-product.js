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
      "Products",
      [
        // Products for Dandruff
        {
          id: "1a2b3c4d-5678-9abc-def0-1234567890ab",
          photo:
            "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/2/24/f30a8ae0-5321-462b-b565-5e72c1096844.jpg",
          name: "Anti-Dandruff Shampoo",
          category: "Shampoo",
          price: "50000",
          linkStore: "https://tokopedia.com",
        },
        {
          id: "2b3c4d5e-6789-0abc-def1-2345678901bc",
          photo:
            "https://m.media-amazon.com/images/I/811shC-r4cL._AC_SL1500_.jpg",
          name: "Omega-3 Supplements",
          category: "Supplements",
          price: "60000",
          linkStore: "https://tokopedia.com",
        },
        {
          id: "3c4d5e6f-7890-1abc-def2-3456789012cd",
          photo: "https://m.media-amazon.com/images/I/71CHXdhRlGL._SL1500_.jpg",
          name: "Dandruff Brush",
          category: "Brush",
          price: "30000",
          linkStore: "https://tokopedia.com",
        },
        {
          id: "4d5e6f7g-8901-2abc-def3-4567890123de",
          photo:
            "https://m.media-amazon.com/images/I/612CkOLAxIL._AC_SL1500_.jpg",
          name: "Hypoallergenic Shampoo",
          category: "Shampoo",
          price: "70000",
          linkStore: "https://tokopedia.com",
        },
        {
          id: "5e6f7g8h-9012-3abc-def4-5678901234ef",
          photo:
            "https://m.media-amazon.com/images/I/61eiiQzL-2L._AC_SL1141_.jpg",
          name: "Dandruff Relief Spray",
          category: "Spray",
          price: "45000",
          linkStore: "https://tokopedia.com",
        },

        // Products for Dermatitis
        {
          id: "6f7g8h9i-0123-4abc-def5-6789012345fg",
          photo:
            "https://m.media-amazon.com/images/I/41Pk5Vy-d4L._AC_SL1200_.jpg",
          name: "Dermatitis Cream",
          category: "Cream",
          price: "80000",
          linkStore: "https://tokopedia.com",
        },
        {
          id: "7g8h9i0j-1234-5abc-def6-7890123456gh",
          photo:
            "https://m.media-amazon.com/images/I/61g37RsLqkL._AC_SL1500_.jpg",
          name: "Anti-Inflammatory Ointment",
          category: "Ointment",
          price: "75000",
          linkStore: "https://tokopedia.com",
        },
        {
          id: "8h9i0j1k-2345-6bcd-def7-8901234567hi",
          photo:
            "https://m.media-amazon.com/images/I/71FYbYoes9L._AC_SL1500_.jpg",
          name: "Hypoallergenic Lotion",
          category: "Lotion",
          price: "65000",
          linkStore: "https://tokopedia.com",
        },
        {
          id: "9i0j1k2l-3456-7cde-def8-9012345678ij",
          photo:
            "https://m.media-amazon.com/images/I/61YDo5EBnPL._AC_SL1500_.jpg",
          name: "Allergen-Free Soap",
          category: "Soap",
          price: "40000",
          linkStore: "https://tokopedia.com",
        },
        {
          id: "0j1k2l3m-4567-8def-def9-0123456789jk",
          photo:
            "https://m.media-amazon.com/images/I/61QSd+i-9-L._AC_SL1500_.jpg",
          name: "Anti-Itch Spray",
          category: "Spray",
          price: "50000",
          linkStore: "https://tokopedia.com",
        },

        // Products for Ear Infection
        {
          id: "1k2l3m4n-5678-9abc-def0-1234567890lm",
          photo:
            "https://m.media-amazon.com/images/I/6105Tffa+0L._AC_SL1500_.jpg",
          name: "Ear Cleaning Solution",
          category: "Solution",
          price: "60000",
          linkStore: "https://tokopedia.com",
        },
        {
          id: "2l3m4n5o-6789-0bcd-def1-2345678901mn",
          photo:
            "https://m.media-amazon.com/images/I/71KVXjqixWL._AC_SL1500_.jpg",
          name: "Antibiotic Ear Drops",
          category: "Ear Drops",
          price: "75000",
          linkStore: "https://tokopedia.com",
        },
        {
          id: "3m4n5o6p-7890-1cde-def2-3456789012no",
          photo:
            "https://m.media-amazon.com/images/I/613RuYdR4PL._AC_SL1500_.jpg",
          name: "Pain Relief Ear Drops",
          category: "Ear Drops",
          price: "70000",
          linkStore: "https://tokopedia.com",
        },
        {
          id: "4n5o6p7q-8901-2def-def3-4567890123op",
          photo:
            "https://m.media-amazon.com/images/I/71ffLMp8UfL._AC_SL1500_.jpg",
          name: "Ear Infection Treatment Kit",
          category: "Kit",
          price: "120000",
          linkStore: "https://tokopedia.com",
        },

        // Products for Fleas
        {
          id: "7g8h9i0j-1234-5def-6789-012345abcdef",
          photo:
            "https://m.media-amazon.com/images/I/71IVD0jifDL._AC_SL1500_.jpg",
          name: "Flea Collar",
          category: "Collar",
          price: "70000",
          linkStore: "https://tokopedia.com",
        },
        {
          id: "8h9i0j1k-2345-6def-7890-123456abcdef",
          photo:
            "https://m.media-amazon.com/images/I/611vfZeBe8L._AC_SL1500_.jpg",
          name: "Flea Shampoo",
          category: "Shampoo",
          price: "45000",
          linkStore: "https://tokopedia.com",
        },
        {
          id: "9i0j1k2l-3456-7def-8901-234567abcdef",
          photo:
            "https://m.media-amazon.com/images/I/71Ku9s2eqnL._AC_SL1500_.jpg",
          name: "Topical Flea Treatment",
          category: "Topical",
          price: "95000",
          linkStore: "https://tokopedia.com",
        },

        // Products for Ringworm
        {
          id: "0j1k2l3m-4567-8def-9012-345678abcdef",
          photo:
            "https://m.media-amazon.com/images/I/61DlC6ggNiS._AC_SL1500_.jpg",
          name: "Antifungal Cream",
          category: "Cream",
          price: "60000",
          linkStore: "https://tokopedia.com",
        },
        {
          id: "1k2l3m4n-5678-9def-0123-456789abcdef",
          photo:
            "https://m.media-amazon.com/images/I/61BGvH-oeCL._AC_SL1500_.jpg",
          name: "Oral Antifungal Medication",
          category: "Medication",
          price: "120000",
          linkStore: "https://tokopedia.com",
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
    await queryInterface.bulkDelete("Products", null, {});
  },
};
