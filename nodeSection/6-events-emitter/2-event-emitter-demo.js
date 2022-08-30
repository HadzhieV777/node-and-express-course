const http = require('http')

// const server = http.createServer((req, res) => {
//     res.end('Welcome')
// })


// Using Event Emitter API
const server = http.createServer()
// Emits request event
// We can subscribe to it / listen for it / respond to it
server.on('request', (req, res) => {
    res.end('Welcome')
})

// Start a server listening for connections. 
// A net.Server can be a TCP or an IPC server depending on what it listens to.
server.listen(5000, () => {
    console.log('Server listening on port 5000...')
})