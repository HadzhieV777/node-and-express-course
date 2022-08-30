const {createReadStream} = require('fs')

// Instances of fs.ReadStream are created and returned using the
// fs.createReadStream() function
const stream = createReadStream('./content/big.txt', )

 // Will reading data in chunks 64KB
stream.on('data', (result) => {
    console.log(result)
   
})