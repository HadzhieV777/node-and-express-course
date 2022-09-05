const express = require("express");
const app = express();
let { people } = require("./data");

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
