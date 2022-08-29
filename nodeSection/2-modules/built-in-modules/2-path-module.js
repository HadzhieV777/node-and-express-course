const path = require('path')

console.log(path)

// path.resolve  returns an absolute path
const absolute = path.resolve(__dirname, '2-path-modules.js')
console.log(absolute)