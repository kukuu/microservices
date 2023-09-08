"use strict";

const express = require("express");
const movieService = require("../services/MovieService"); // Import the MovieService
const log = require("../utils/Logger");

const router = express.Router();
const sampleError = {
  type: "ErrorType",
  message: "Error occurred",
  messageCode: 1052, // Optional message code (numeric)
};

/**
 * @swagger
 * /movies/:
 *   get:
 *     summary: Get a list of all movies
 *     description: Returns a list of all available movies
 *     tags:
 *       - Movies
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successful
 *       500:
 *         description: Server Error
 */
router.get("/", function (req, res) {
  try {
    var promise = movieService.getAllMovies();
    promise.then(function (data) {
      console.log(data.results);
      res.status(200).send(data);
    });
    promise.catch(function (error) {
      log.error("Failed");
      res.status(500).send(sampleError);
    });
  } catch (e) {
    log.error("Route /movies/ failed with error", e);
    res.status(500).send(sampleError);
  }
});

module.exports = router;
