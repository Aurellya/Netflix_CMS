require("dotenv").config();

const cors = require("cors");
const router = require("./routers/router");
const errorHandler = require("./middlewares/errorHandler");

const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(router);

app.use(errorHandler);

module.exports = app;
