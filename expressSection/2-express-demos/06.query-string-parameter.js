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
  const { productId } = req.params;

  const singleProduct = products.find(
    (product) => product.id === Number(productId)
  );

  if (!singleProduct) {
    return res.status(404).send(`Product Does Not Exist!`);
  }

  res.json(singleProduct);
});

// Query String
app.get("/api/v1/query", (req, res) => {
  // console.log(req.query)
  // http://localhost:5000/api/v1/query?search=a&limit=2

  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  if (sortedProducts.length < 1) {
    return res.status(200).json({ success: true, data: [] });
  }

  res.status(200).json(sortedProducts);
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});

// a query string is the part of a URL (Uniform Resource Locater) after the question mark (?).
// It is meant to send small amounts of information to the server via the url.
// This information is usually used as parameters to query a database, or maybe to filter results.
// It's really up to you what they're used for.
