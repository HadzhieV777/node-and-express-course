The event loop is what allows Node.js to perform non-blocking I/O operations — despite the fact that JavaScript is single-threaded — by offloading operations to the system kernel whenever possible.

Since most modern kernels are multi-threaded, they can handle multiple operations executing in the background. When one of these operations completes, the kernel tells Node.js so that the appropriate callback may be added to the poll queue to eventually be executed. We'll explain this in further detail later in this topic.

Event Loop Explained

When Node.js starts, it initializes the event loop, processes the provided input script (or drops into the REPL, which is not covered in this document) which may make async API calls, schedule timers, or call process.nextTick(), then begins processing the event loop.


Phases Overview

    timers: this phase executes callbacks scheduled by setTimeout() and setInterval().
    pending callbacks: executes I/O callbacks deferred to the next loop iteration.
    idle, prepare: only used internally.
    poll: retrieve new I/O events; execute I/O related callbacks (almost all with the exception of close callbacks, the ones scheduled by timers, and setImmediate()); node will block here when appropriate.
    check: setImmediate() callbacks are invoked here.
    close callbacks: some close callbacks, e.g. socket.on('close', ...).

<!-- REF => https://nodejs.dev/en/learn/the-nodejs-event-loop/ -->

<!-- REF => https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/ -->

<!-- REF => https://course-api.com/ -->