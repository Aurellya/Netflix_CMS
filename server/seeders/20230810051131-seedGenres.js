"use strict";
const genres = require("../data/genres.json");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    genres.forEach((genre) => {
      genre.createdAt = new Date();
      genre.updatedAt = new Date();
    });
    await queryInterface.bulkInsert("Genres", genres, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Genres", null, {});
  },
};
