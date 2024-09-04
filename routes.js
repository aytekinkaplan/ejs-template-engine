const express = require("express");
const router = express.Router();

// Define a route for the home page
router.get("/", (req, res) => {
  res.render("index");
});

// Define a route for the about page
router.get("/about", (req, res) => {
  res.render("about");
});

// Define a route for the contact page
router.get("/contact", (req, res) => {
  res.render("contact");
});

// Define a route for the posts page
router.get("/posts", (req, res) => {
  res.render("posts");
});

// Define a route for the authors page
router.get("/authors", (req, res) => {
  res.render("authors");
});

module.exports = router;
