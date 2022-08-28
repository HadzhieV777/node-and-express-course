// GLOBALS - NO WINDOW !!!

// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed

//  REF -> https://nodejs.org/en/knowledge/getting-started/globals-in-node-js/

console.log(__dirname)
setInterval(() => {
    console.log("Hello World!")
}, 1000)