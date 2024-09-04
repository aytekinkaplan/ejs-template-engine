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
// Import routes
const routes = require("./routes");

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

// Use routes
app.use("/", routes);

// Start the server and listen on the specified port and host
app.listen(port, host, () => {
  console.log(`http://${host}:${port}`);
});
