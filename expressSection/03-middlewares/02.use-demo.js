const express = require("express");
const app = express();
const logger = require("../logger.js");
// req => middleware => res

// Apply middleware to the middleware stack in the app for each route
// Order is very important!
// We can ommit paths
app.use(logger)

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
