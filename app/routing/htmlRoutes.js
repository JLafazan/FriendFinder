// Dependencies
// =============================================================
// var express = require("express");
// var bodyParser = require("body-parser");
var path = require("path");


// Routes
// =============================================================

module.exports = function (app) {


// Basic route that sends the user first to the AJAX Page

// Displays survey page
app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});

// Default Catch-All route to home page
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

};