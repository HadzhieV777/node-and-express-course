// Async version of fs method explained with callback hell

const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf8", (err, result) => {
  handleError(err);
  //   if we don't provide the encoding value, the buffer will be returned
  // instead of the file content
  const first = result;

  readFile("./content/second.txt", "utf8", (err, result) => {
    handleError(err);
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the result: ${first}, ${second}`,
      (err, result) => {
        handleError(err);
        console.log(result);
      }
    );
  });
});

function handleError(err) {
  if (err) {
    console.log(err);
    return;
  }
}

// Asynchronous calls allow for the branching of execution chains and the passing of results through that execution chain.
// This has many advantages. For one, the program can execute two or more calls at the same time,
// and do work on the results as they complete, not necessarily in the order they were first called.

// REF => https://stackoverflow.com/a/21612111/18011863

// Node.js Buffers
// A buffer is an area of memory. Most JavaScript developers are much less familiar with this concept, compared to programmers using a system programming language (like C, C++, or Go),
// which interact directly with memory every day.
// It represents a fixed-size chunk of memory (can't be resized) allocated outside of the V8 JavaScript engine.
// You can think of a buffer like an array of integers, which each represent a byte of data.
// It is implemented by the Node.js Buffer class.

//  REF => https://nodejs.dev/en/learn/nodejs-buffers/
