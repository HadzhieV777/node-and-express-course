const express = require("express");
const app = express();

const morgan = require("morgan");

const logger = require("./logger.js");
const authorize = require("./authorize.js");
//  req => middleware => res

app.use(morgan("tiny")); // GET /about/?user=john 200 10 - 13.965 ms

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/api/products", (req, res) => {
  res.send("Products Page");
});

app.get("/api/items", (req, res) => {
  res.send("Items Page");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});

// morgan(format, options);
// Create a new morgan logger middleware function using the given format and options.
// The format argument may be a string of a predefined name (see below for the names),
// a string of a format string, or a function that will produce a log entry.
// The format function will be called with three arguments tokens, req, and res,
//  where tokens is an object with all defined tokens,
//  req is the HTTP request and res is the HTTP response. The function is expected to return a string that will be the log line, or undefined / null to skip logging.
