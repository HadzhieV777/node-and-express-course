const express = require("express");
const app = express();
let { people } = require("../data");

// Static assets
app.use(express.static("../methods-public"));

// Parse form data
app.use(express.urlencoded({ extended: false }));

// The extended option allows to choose between parsing the URL-encoded data
//  with the querystring library (when false) or the qs library (when true).

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send("Please provide credentials!");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});

// urlencoded()
// Returns middleware that only parses urlencoded bodies and only looks at requests where
// the Content-Type header matches the type option
