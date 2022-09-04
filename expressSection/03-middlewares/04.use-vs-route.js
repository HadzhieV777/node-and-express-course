const express = require("express");
const app = express();

const logger = require("../logger.js");
const authorize = require("../authorize.js");
//  req => middleware => res

// 1. use vs route
//  - use: for each route. 
// 2. options = our own / express / third party

// app.use([logger, authorize])

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/api/products", (req, res) => {
  res.send("Products Page");
});

app.get("/api/items", [logger, authorize], (req, res) => {
  res.send("Items Page");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
