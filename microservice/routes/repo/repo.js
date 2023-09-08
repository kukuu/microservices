"use strict";

var express = require("express");
var imagesEndpoint = require("./images");
var router = express.Router();
var repoService = require("../../services/RepoService");

var log = require("../../utils/Logger");
let sampleError = {
  type: "ErrorType",
  message: "Error occured",
  messageCode: 1052, // Optional message code (numeric)
};
/**
 * @swagger
 * /repo:
 *   get:
 *     summary: Get list of all repositories
 *     description: Returns a list of all repositories
 *     tags:
 *       - Repo
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successful
 *       500:
 *         description: Server Error
 */
router.use("/", function (req, res) {
  try {
    var promise = repoService.getAllRepos();

    promise.then(function (data) {
      res.status(200).send(data);
    });
    promise.catch(function (error) {
      log.error("Failed");
      res.status(500).send(sampleError);
    });
  } catch (e) {
    log.error("Route /repos/ failed with error", e);
    res.status(500).send(sampleError);
  }
});

module.exports = router;
