const http = require("http");

const server = http.createServer((req, res) => {
  // Providing Headers(Metadata) about our response
  res.writeHead(200, { "content-type": "text/html" });
  res.write("<h1>Home page</h1>");
  res.end()
});

server.listen(5000);

// .writeHead() Sends a response header to the request. The status code is a 3-digit HTTP status code, like 404.
// The last argument, headers, are the response headers.
// Optionally one can give a human-readable statusMessage as the second argument.
// headers may be an Array where the keys and values are in the same list.
// It is not a list of tuples. So, the even-numbered offsets are key values, and the odd-numbered offsets are the associated values. The array is in the same
// format as request.rawHeaders.
