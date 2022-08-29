const EventEmitter = require("events");

const customEmitter = new EventEmitter();

// It's possible to add multiple events on a current listener
customEmitter.on("response", (name, id) => {
  console.log(`Data received! User ${name} with id: ${id}`);
});

customEmitter.on("response", () => {
  console.log("Some other logic...");
});

// Must add the events first and after that emit
customEmitter.emit("response", "John", "11Ua6721qq34");
