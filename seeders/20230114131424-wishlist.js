"use strict";

export async function up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert("Wishlists", [
      {
        id_wishlist: 1,
        id_customer: 2,
      },
      {
        id_wishlist: 2,
        id_customer: 1,
      },
    ]);
  },

  export async function down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
