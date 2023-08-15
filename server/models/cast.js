"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cast extends Model {
    static associate(models) {
      Cast.belongsTo(models.Movie, { foreignKey: "movieId" });
    }
  }
  Cast.init(
    {
      movieId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          notNull: {
            msg: "MovieId is required",
          },
          notEmpty: {
            msg: "MovieId is required",
          },
        },
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: {
            msg: "Cast Name is required",
          },
          notEmpty: {
            msg: "Cast Name is required",
          },
        },
      },
      profilePict: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Cast",
    }
  );
  return Cast;
};
