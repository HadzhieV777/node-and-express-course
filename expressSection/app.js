const express = require("express");
const app = express();

const logger = require("./logger.js");
const authorize = require('./authorize.js')

app.use([logger, authorize])

app.get("/", (req, res) => {
  res.send("Home Page"); // GET / 2022
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
