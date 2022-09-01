const http = require("http");
const { readFileSync } = require("fs");
//  04: 45: 13
// get all files
const homePage = readFileSync("./navbar-app/index.html");
const homeStyles = readFileSync("./navbar-app/styles.css");
const homeImage = readFileSync("./navbar-app/logo.png");
const homeLogic = readFileSync("./navbar-app/browser-app.js");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    // Home
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  } else if (url === "/styles.css") {
    // Styles
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeStyles);
    res.end();
  } else if (url === "/logo.png") {
    // Image/logo
    res.writeHead(200, { "content-type": "image/png" });
    res.write(homeImage);
    res.end();
  } else if (url === "/browser-app.js") {
    // Logic
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(homeLogic);
    res.end();
  } else {
    // Not Found
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>Opps.. This resource is unavailable :(</h1>");
    res.end();
  }
});

server.listen(5000);
