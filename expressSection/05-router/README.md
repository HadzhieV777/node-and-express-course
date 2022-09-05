## Express Router


The express.Router() function is used to create a new router object. This function is used when you want to create a new router object in your program to handle requests.

Express Router is a built-in class that refers to how an application’s endpoints (URIs) respond to client requests. In addition, the express router class helps create route handlers.

You define routing using the Express app object methods that correspond to HTTP methods; for example, app.get() to handle GET requests and app.post to handle POST requests. 

You can also use the app.all() to handle all HTTP methods and app.use() to specify middleware as the callback function.

#### Create router using express 
  - const express = require('express');
  - const router = express.Router();

#### Optional Parameters:

  - case-sensitive: This enables case sensitivity.
  - mergeParams: It preserves the req.params values from the parent router.
  - strict: This enables strict routing.

#### Return Value: 
This function returns the New Router Object.


###### REF => https://appdividend.com/2022/03/05/express-router/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
