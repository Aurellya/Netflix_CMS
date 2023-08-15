"use strict";
const movies = require("../data/movies.json");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    movies.forEach((movie) => {
      movie.createdAt = new Date();
      movie.updatedAt = new Date();
    });
    await queryInterface.bulkInsert("Movies", movies, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Movies", null, {});
  },
};
