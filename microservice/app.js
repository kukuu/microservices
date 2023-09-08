"use strict";
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
const log = require("./utils/Logger");
const cors = require("cors"); // Import the CORS middleware

var apiEndpoint = require("./routes/api");

log.info("Starting the express app");
var app = express(); // Initialize express()

// view engine setup
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(cookieParser());

// Enable CORS for all routes
app.use(cors()); // Add this line to enable CORS

app.use("/", express.static(path.join(__dirname, "public/swagger-ui")));
app.use("/api", apiEndpoint);

app.use(function (req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

if (app.get("env") === "development") {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render("error", {
      message: err.message,
      error: err,
    });
  });
}

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render("error", {
    message: err.message,
    error: {},
  });
});

app.listen(process.env.PORT || 3011, function () {
  log.info("Started the express microservice.");
});

module.exports = app;
