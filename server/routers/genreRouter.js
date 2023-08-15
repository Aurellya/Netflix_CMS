// IMPORT
const adminAuthorization = require("../middlewares/adminAuth");
const GenreController = require("../controllers/genreController");
const express = require("express");

// SETUP
const router = express.Router();

// ROUTES
router.get("/", GenreController.getGenres);
router.get("/:id", GenreController.getGenreDetails);
router.use(adminAuthorization);
router.post("/", GenreController.addGenre);
router.put("/:id", GenreController.editGenre);
router.delete("/:id", GenreController.deleteGenre);

module.exports = router;
