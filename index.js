// Import the Express.js framework
const express = require("express");

// Import the express-ejs-layouts module for layout support
const expressEjsLayouts = require("express-ejs-layouts");

// Create an instance of the Express application
const app = express();

// Define the port number on which the server will listen
const port = 3000;

// Define the host address for the server
const host = "127.0.0.1";

// Import the built-in Node.js path module
const path = require("path");

// Set EJS as the view engine for the application
app.set("view engine", "ejs");

// Set the directory for the views (templates)
app.set("views", path.join(__dirname, "views"));

// Add middleware to parse URL-encoded data (form submissions)
app.use(express.urlencoded({ extended: true }));

// Add middleware to parse JSON data
app.use(express.json());

// Use express-ejs-layouts middleware for layout support
app.use(expressEjsLayouts);

// Set the default layout file
app.set("layout", "layouts/main");

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Define a route for the home page
app.get("/", (req, res) => {
  res.render("index");
});

// Define a route for the about page
app.get("/about", (req, res) => {
  res.render("about");
});

// Define a route for the contact page
app.get("/contact", (req, res) => {
  res.render("about");
});

// Define a route for the posts page
app.get("/posts", (req, res) => {
  res.render("posts");
});

// Define a route for the authors page
app.get("/authors", (req, res) => {
  res.render("authors");
});

// Start the server and listen on the specified port and host
app.listen(port, host, () => {
  console.log(`http://${host}:${port}`);
});
