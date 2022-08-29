// HTTP Module
// Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).
// The HTTP module can create an HTTP server that listens to server ports and gives a response back to the client.
// Use the createServer() method to create an HTTP server:
// The function passed into the http.createServer() method, will be executed when someone tries to access the computer on port 8080.

// REF => https://www.w3schools.com/nodejs/nodejs_http.asp

const http = require("http");

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Welcome to our homepage.')
    }
    if(req.url === '/about') {
        res.end('Welcome to our about page.')
    }
    res.end(`<h1>Ooops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">Back to home</a>`)
})

server.listen(5000)

// Calling the writable.end() method signals that no more data will be written to the Writable. 
// The optional chunk and encoding arguments allow one final additional chunk of data to be written 
// immediately before closing the stream.
// Calling the write method after calling end will raise an error