// CommonJS, every file is module(by default)
// Node.js has a set of built-in modules which you can use without any further installation.
// Example: OS, PATH, FS, HTTP

// Modules - Encapsulated Code (only share minimum). 
// Consider modules to be the same as JavaScript libraries.
// A set of functiA set of functions you want to include in your application.ons you want to include in your application.

const names = require('./2-names-module')
const sayHi = require('./3-util-modules')

const data = require('./4-alternative-flavour')
console.log(data) // { items: [ 'item1', 'item2' ], singlePerson: { name: 'Bob' } }


sayHi("Susan");
sayHi(names.john);
sayHi(names.peter);

require('./5-mind-grenade')
