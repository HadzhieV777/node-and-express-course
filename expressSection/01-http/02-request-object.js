const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req.url)
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>Home page</h1>");
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>Further info can be found here.</h1>");
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>Opps.. This resource is unavailable :(</h1>");
    res.end();
  }
});

server.listen(5000);
