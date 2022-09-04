const express = require("express");
const app = express();
const { products } = require("./data");

// Home
app.get("/", (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/products">All products</a>');
});

// All products
app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });

  res.json(newProducts);
});

// Single product
app.get("/api/products/:productId", (req, res) => {
  // console.log(req)
  // console.log(req.params)
  const { productId } = req.params;

  const singleProduct = products.find(
    (product) => product.id === Number(productId)
  );

  if (!singleProduct) {
    return res.status(404).send(`Product Does Not Exist!`);
  }

  res.json(singleProduct);
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});

// The app.get() function routes the HTTP GET Requests to the path
// which is being specified with the specified callback functions.
//  Basically it is intended for binding the middleware to your application.
