"use strict";
const casts = require("../data/casts.json");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    casts.forEach((cast) => {
      cast.createdAt = new Date();
      cast.updatedAt = new Date();
    });
    await queryInterface.bulkInsert("Casts", casts, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Casts", null, {});
  },
};
