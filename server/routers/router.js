// IMPORT
const authentication = require("../middlewares/authentication");
const superAdminAuthorization = require("../middlewares/superAdminAuth");
const Controller = require("../controllers/controller");
const express = require("express");
const genreRouter = require("./genreRouter");
const movieRouter = require("./movieRouter");
const pubRouter = require("./pubRouter");

// SETUP
const router = express.Router();

// ROUTES
router.get("/", function (req, res, next) {
  res.send("Welcome to Netflix API");
});

// USER ROUTES
router.use("/pub", pubRouter);

// ADMIN ROUTES
router.post("/login", Controller.login);
router.use(authentication);
router.use("/movies", movieRouter);
router.use("/genres", genreRouter);
router.post("/add-admin", superAdminAuthorization, Controller.addAmin); // register admin

module.exports = router;
