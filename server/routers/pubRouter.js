// IMPORT
const PubController = require("../controllers/pubController");
const express = require("express");

// SETUP
const router = express.Router();

// ROUTES
router.get("/", function (req, res, next) {
  res.send("Welcome to Netflix Public API");
});

router.get("/movies", PubController.getMovies);
router.get("/movies/:slug", PubController.getMovieDetails);

module.exports = router;
