const express = require("express");
const app = express();
const path = require("path");
const ejs = require("ejs");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.listen(3000);
