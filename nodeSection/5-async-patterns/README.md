### Asynchronous Patterns in Node.js

Since the node is a language that runs on a single thread which in turn uses multiple threads in the background. A code in node.js should be nonblocking because if a particular line of code, for ex: Reading a large document can halt the execution of all the lines of code ahead of it which is not a good practice.
That’s why to implement functionality that could take some time, is being done in an asynchronous way which takes the execution of that particular part out of the main event loop and the program runs normally.

There are three patterns of asynchronous:

    * Callbacks
    * Promises
    * Async-await

###### 1. Callbacks: 
 A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

This function is called when the asynchronous operation is completed. Mainly the body of callback function contains the asynchronous operation.

The most common form is “error-first” callback in which if the parent function and takes error parameter, if there is an error then it executes the error part otherwise execute the other part.

Generally, callbacks are not used because all the code after an asynchronous operation is nested inside a function. More asynchronous operations mean more indentation which ultimately results in unreadability and confusion and the problem becomes more and more significant by larger functions. It is also referred to as “Pyramids of deaths”. 

######  2. Promises: 
 A promise is a proxy for a state or value that is unknown for the moment when the promise is created but could be determined in the near future. This lets asynchronous methods return a promise to supply value at some point in the future.

######  3. Async-await: 
 It is a method in which parent function is declared with the async keyword and inside it await keyword is permitted. The async and await keyword enables asynchronous, promise-based behavior so that code could be written a lot cleaner and avoid promise chains.
