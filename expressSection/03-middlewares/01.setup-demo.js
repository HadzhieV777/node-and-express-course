const express = require("express");
const app = express();

// req => middleware => res

// Middleware func
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  //   .next() passing to the next middleware in the stack
  next();
  //   Terminating the whole cycle with .send()
  //   res.send('Testing')
};

app.get("/", logger, (req, res) => {
  res.send("Home Page"); // GET / 2022
});

app.get("/about", logger, (req, res) => {
  res.send("About Page");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
