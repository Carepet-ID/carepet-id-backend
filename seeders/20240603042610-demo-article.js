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
          "https://www.purina.com/_gatsby/image/a8e31276edd3417015e904b0cfe77f6c/17bad0d81e21f77a8117a01758b60559/should-you-feed-your-dog-a-sensitive-skin-dog-food-1.avif?u=https%3A%2F%2Fwww.purina.com%2Fsites%2Fdefault%2Ffiles%2F2023-02%2Fshould-you-feed-your-dog-a-sensitive-skin-dog-food-1.jpg&a=w%3D800%26h%3D400%26fm%3Davif%26q%3D75&cd=544ff28d7cc04d6bd71b8e4b66482c5a",
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
          "https://www.purina.com/_gatsby/image/035f202f018ed3e8a7501048737932d6/17bad0d81e21f77a8117a01758b60559/is-corn-good-for-my-dog_2.avif?u=https%3A%2F%2Fwww.purina.com%2Fsites%2Fdefault%2Ffiles%2F2023-06%2Fis-corn-good-for-my-dog_2.jpg&a=w%3D800%26h%3D400%26fm%3Davif%26q%3D75&cd=ce91ce13b9329139ec4522b8db5f647f",
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
          "https://www.purina.com/_gatsby/image/497d66e4aed33c786770a8811e0bea06/17bad0d81e21f77a8117a01758b60559/best-protein-for-dogs.avif?u=https%3A%2F%2Fwww.purina.com%2Fsites%2Fdefault%2Ffiles%2F2023-01%2Fbest-protein-for-dogs.jpg&a=w%3D800%26h%3D400%26fm%3Davif%26q%3D75&cd=e0337086574304ef7d0a43cdb8cfc5cc",
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
