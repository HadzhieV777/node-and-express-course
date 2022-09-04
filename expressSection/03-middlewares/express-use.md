## The `app.use()` Function in Express

Express apps have a use() function. This function adds a new middleware to the app.

For example, suppose you want to print the HTTP method (get, post, etc.) and the URL of every request.


## The Middleware Stack

In Express, everything is middleware. Internally, an Express app has a middleware stack, and calling use() adds a new layer to the stack. Functions that define route handlers, like get() and post() also add layers to the stack. Express executes the middleware stack in order, so the order in which you call use() matters.

For example, one of the most common middleware functions is the cors middleware, which attaches CORS headers to your Express HTTP responses. Make sure you call app.use(cors()) before defining any route handlers or anything else that sends an HTTP response, otherwise you won't get CORS headers!


REF => https://masteringjs.io/tutorials/express/app-use
