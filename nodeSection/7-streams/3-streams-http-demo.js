const http =require('http');
const fs = require('fs');


http
.createServer(function (req, res) {
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text)
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
    fileStream.on('open', () => {

        // .pipe() method pushing from the readStream into the writeStream
        // the response header will chunk the data: Transfer-Encoding: chunked
        // meaning we are sending the file in chunks instead of one large instance
        fileStream.pipe(res)
    })
    fileStream.on('error', (err) => {
        res.end(err)
    })
})
.listen(5000)
