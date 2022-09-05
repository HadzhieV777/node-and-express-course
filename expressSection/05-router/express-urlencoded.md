express.urlencoded() is a built-in middleware in Express.js. The main objective of this method is to parse the incoming request with urlencoded payloads and is based upon the body-parser.

This method returns the middleware that parses all the urlencoded bodies.
Syntax

express.urlencoded( [options] )

Parameters

Following are the different options available with this method −

    options −

        inflate − This enables or disables the handling of the deflated or compressed bodies. Default: true

        limit − This controls the maximum size of the request body.

        extended − This option allows to choose between parsing the URL encoded data with the queryString Library or the qs Library.

        type − This determines the media type for the middleware that will be parsed.

        parameterLimit − This option controls the maximum number of parameters that are allowed in the URL-encoded data.


REF => https://www.tutorialspoint.com/express-js-express-urlencoded-method
