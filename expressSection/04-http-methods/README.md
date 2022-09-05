The HTTP method is supplied in the request and specifies the operation that the client has requested. The following table lists the most used HTTP methods −
S.No. 	Method & Description
1 	

GET

The GET method requests a representation of the specified resource. Requests using GET should only retrieve data and should have no other effect.
2 	

POST

The POST method requests that the server accept the data enclosed in the request as a new object/entity of the resource identified by the URI.
3 	

PUT

The PUT method requests that the server accept the data enclosed in the request as a modification to existing object identified by the URI. If it does not exist then the PUT method should create one.
4 	

DELETE

The DELETE method requests that the server delete the specified resource.


REF => https://www.tutorialspoint.com/expressjs/expressjs_http_methods.htm


Axios

Axios is a promise-based HTTP Client for node.js and the browser. It is isomorphic (= it can run in the browser and nodejs with the same codebase). On the server-side it uses the native node.js http module, while on the client (browser) it uses XMLHttpRequests.