"use strict";

var express = require("express");
var expenseService = require("../services/ProjectExpenseService");
var log = require("../utils/Logger");

let router = express.Router();
let sampleError = {
  type: "ErrorType",
  message: "Error occured",
  messageCode: 1052, // Optional message code (numeric)
};

/**
 * @swagger
 * /expenses:
 *   get:
 *     summary: Get all expenses
 *     description: Returns all expenses with details
 *     tags:
 *       - Expenses
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
    var promise = expenseService.getAllExpenses();

    promise.then(function (data) {
      // Do something (if required) with the data, then send it to the client
      res.status(200).send(data);
    });

    promise.catch(function (error) {
      // Never send stack traces to the client.
      log.error("Failed");
      res.status(500).send(sampleError);
    });
  } catch (e) {
    // Use a good logging framework for logging to file
    log.error("Route /expenses/ failed with error", e);
    res.status(500).send(sampleError);
  }
});

/**
 * @swagger
 * /expenses/expense:
 *   get:
 *     summary: Get details of a expense
 *     description: Returns details of a single expense
 *     tags:
 *       - Expenses
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: expenseId
 *         description: ID of the expense to fetch
 *         in: query
 *         required: true
 *         type: string
 *         example: 1
 *     responses:
 *       200:
 *         description: Successful
 *       500:
 *         description: Server Error
 */
router.get("/expense", function (req, res) {
  // This route needs to be ordered before /:expenseId since express will match '/expense' to be path param as well
  var promise;
  try {
    promise = expenseService.getExpense(req.query.expenseId);

    promise.then(function (data) {
      // Do something (if required) with the data, then send it to the client
      res.status(200).send(data);
    });

    promise.catch(function (error) {
      // Never send stack traces to the client.
      res.status(500).send(sampleError);
    });
  } catch (e) {
    // Use a good logging framework for logging to file
    res.status(500).send(sampleError);
  }
});

/**
 * @swagger
 * /expenses/{expenseId}:
 *   get:
 *     summary: Get details of a expense
 *     description: Returns details of a single expense
 *     tags:
 *       - Expenses
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: expenseId
 *         description: ID of the expense to fetch
 *         in: path
 *         required: true
 *         type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Successful
 *       500:
 *         description: Server Error
 */
router.get("/:expenseId", function (req, res) {
  try {
    var promise = expenseService.getExpense(req.params.expenseId);

    promise.then(function (data) {
      // Do something (if required) with the data, then send it to the client
      res.status(200).send(data);
    });

    promise.catch(function (error) {
      // Never send stack traces to the client.
      console.log("/expenses/" + expenseId + " failed with error", error);
      res.status(500).send(sampleError);
    });
  } catch (e) {
    // Use a good logging framework for logging to file
    res.status(500).send(sampleError);
  }
});

module.exports = router;
