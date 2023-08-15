const { Op } = require("sequelize");
const { Movie, Genre, Cast, User, sequelize } = require("../models");
const convertToSlug = require("../helpers/convertToSlug");

class MovieController {
  static async getMovies(req, res, next) {
    try {
      const { title } = req.query;
      const searchCondition = title
        ? { title: { [Op.iLike]: `%${title}%` } }
        : {};

      const movies = await Movie.findAll({
        order: [["id", "ASC"]],
        where: searchCondition,
        include: [
          {
            model: Genre,
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
          {
            model: Cast,
            order: [["id", "ASC"]],
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
        ],
      });

      res.status(200).json(movies);
    } catch (error) {
      next(error);
    }
  }

  static async getMovieDetails(req, res, next) {
    try {
      const { id } = req.params;
      const movie = await Movie.findOne({
        where: {
          id: +id,
        },
        include: [
          {
            model: Genre,
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
          {
            model: Cast,
            order: [["id", "ASC"]],
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
          {
            model: User,
            attributes: {
              exclude: ["createdAt", "updatedAt", "password"],
            },
          },
        ],
      });

      if (!movie) throw { name: "NotFound" };
      res.status(200).json(movie);
    } catch (error) {
      next(error);
    }
  }

  static async addMovie(req, res, next) {
    const trx = await sequelize.transaction();
    try {
      const { title, synopsis, trailerUrl, imgUrl, rating, genreId, Casts } =
        req.body;

      // :ADD MOVIE
      // get authorId
      const { id: authorId } = req.user;
      // generate slug
      const slug = convertToSlug(title);

      const movie = await Movie.create(
        {
          title,
          slug,
          synopsis,
          trailerUrl,
          imgUrl,
          rating,
          genreId,
          authorId,
        },
        {
          transaction: trx,
        }
      );

      // :ADD CASTS
      Casts.forEach((cast) => {
        cast.movieId = movie.id;
      });

      await Cast.bulkCreate(Casts, {
        transaction: trx,
      });

      await trx.commit();
      res.status(201).json({
        message: `Success to add movie ${movie.title}`,
      });
    } catch (error) {
      await trx.rollback();
      next(error);
    }
  }

  static async editMovie(req, res, next) {
    const trx = await sequelize.transaction();
    try {
      const { title, synopsis, trailerUrl, imgUrl, rating, genreId, Casts } =
        req.body;

      // :EDIT MOVIES
      // get authorId
      const { id: authorId } = req.user;
      // get movie id from url params
      const { id: movieId } = req.params;
      // generate slug
      const slug = convertToSlug(title);

      const findMovie = await Movie.findByPk(+movieId);
      if (!findMovie) throw { name: "NotFound" };

      await Movie.update(
        {
          title,
          slug,
          synopsis,
          trailerUrl,
          imgUrl,
          rating,
          genreId,
          authorId,
        },
        {
          where: {
            id: +movieId,
          },
          transaction: trx,
        }
      );

      // :EDIT CASTS
      await Cast.destroy({ where: { movieId: +movieId } });

      Casts.forEach((cast) => {
        cast.movieId = +movieId;
      });

      await Cast.bulkCreate(Casts, {
        transaction: trx,
      });

      await trx.commit();
      res.status(201).json({
        message: `Success to edit movie with id ${movieId}`,
      });
    } catch (error) {
      await trx.rollback();
      next(error);
    }
  }

  static async deleteMovie(req, res, next) {
    try {
      const { id } = req.params;

      const movie = await Movie.findByPk(+id);
      if (!movie) throw { name: "NotFound" };
      movie.destroy();

      res.status(200).json({
        message: `Movie with id ${id} removed successfully`,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = MovieController;
