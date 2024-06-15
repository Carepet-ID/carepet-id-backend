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
    return queryInterface.bulkInsert("Articles", [
      {
        id: "879f4637-2f34-4e89-92b8-c856e95fdc36",
        photo:
          "https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg",
        title: "Dog Sensitive Skin: Causes & Treatment",
        category: "Health",
        content:
          "How Do I Know if My Dog Has Sensitive Skin? If your dog has irritated skin, it’s important to get to the root of the problem. Your veterinarian can help you figure out whether your dog is suffering from a skin disease or allergies. Allergic dermatitis can be triggered by many different things, from flea bite allergies to seasonal allergies like mold or pollen. The most common signs of allergic dermatitis are itching, scratching and chewing.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "03dde6ba-0bad-4726-824f-0938a891d276",
        photo:
          "https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg",
        title: "Is Corn Good for My Dog?",
        category: "Health",
        content:
          "We all want the best for our dogs. And lately, you may have heard more than a little skepticism about corn in dog food. Since there’s so much misinformation floating around, we think you should know the real facts about corn before you decide what’s right for your dog.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "cf74f5bb-a1ff-48c5-a4e4-d277b3e602fa",
        photo:
          "https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg",
        title: "What Are the Benefits of High Protein Dog Food?",
        category: "Health",
        content:
          "As one of the most crucial nutrients in your dog’s diet, protein in dog food helps support dogs’ muscles, skin, immune system, hair and more. If you’re a dog or puppy owner, you’re probably used to seeing dog food labels call out their protein content. That's because daily protein intake is an integral component of a complete and balanced diet. Protein is made from amino acids, which are considered the building blocks of protein. Your dog needs food that provides the amino acids they need to support their health, energy and more.",
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
    return queryInterface.bulkDelete("Articles", null, {});
  },
};
