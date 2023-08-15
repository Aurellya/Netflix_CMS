const { Op } = require("sequelize");
const { Genre } = require("../models");
class GenreController {
  static async getGenres(req, res, next) {
    try {
      const { name } = req.query;
      const searchCondition = name ? { name: { [Op.iLike]: `%${name}%` } } : {};

      const genres = await Genre.findAll({
        order: [["id", "ASC"]],
        where: searchCondition,
      });
      res.status(200).json(genres);
    } catch (error) {
      next(error);
    }
  }

  static async getGenreDetails(req, res, next) {
    try {
      const { id } = req.params;
      const genre = await Genre.findOne({
        where: {
          id: +id,
        },
      });

      if (!genre) throw { name: "NotFound" };
      res.status(200).json(genre);
    } catch (error) {
      next(error);
    }
  }

  static async addGenre(req, res, next) {
    try {
      const { name } = req.body;
      const genres = await Genre.create({ name });
      res.status(201).json(genres);
    } catch (error) {
      next(error);
    }
  }

  static async editGenre(req, res, next) {
    try {
      const { name } = req.body;
      const { id: genreId } = req.params;

      const findGenre = await Genre.findByPk(+genreId);
      if (!findGenre) throw { name: "NotFound" };

      await Genre.update({ name }, { where: { id: +genreId } });

      res.status(201).json({
        message: `Success to edit genre with id ${genreId}`,
      });
    } catch (error) {
      next(error);
    }
  }

  static async deleteGenre(req, res, next) {
    try {
      const { id } = req.params;

      const genre = await Genre.findByPk(+id);
      if (!genre) throw { name: "NotFound" };
      await genre.destroy();

      res.status(200).json({
        statusCode: 200,
        message: `Genre ${genre.name} is deleted successfully`,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = GenreController;
