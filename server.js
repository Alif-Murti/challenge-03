// load the things we need
var express = require("express");
var app = express();

// set the view engine to ejs
app.set("view engine", "ejs");

// use res.render to load up an ejs view file

// index page
app.get("/", function (req, res) {
  res.render("pages/index");
});

app.get("/dashboard", function (req, res) {
  res.render("pages/dashboard");
});

app.get("/cars", function (req, res) {
  res.render("pages/cars");
});

app.get("/car_form", function (req, res) {
  res.render("pages/car_form");
});

// about page
app.get("/about", function (req, res) {
  res.render("pages/about");
});

app.listen(8080);
console.log("8080 is the magic port");

app.use(express.static("public"));
