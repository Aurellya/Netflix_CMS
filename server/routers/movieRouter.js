// IMPORT
const adminAuthorization = require("../middlewares/adminAuth");
const MovieController = require("../controllers/movieController");
const express = require("express");

// SETUP
const router = express.Router();

// ROUTES
router.get("/", MovieController.getMovies);
router.get("/:id", MovieController.getMovieDetails);
router.use(adminAuthorization);
router.post("/", MovieController.addMovie);
router.put("/:id", MovieController.editMovie);
router.delete("/:id", MovieController.deleteMovie);

module.exports = router;
