## Node.js Path Module

The Path module provides a way of working with directories and file paths.

Path Properties and Methods
Method 	Description
- basename() 	Returns the last part of a path
- delimiter 	Returns the delimiter specified for the platform
- dirname() 	Returns the directories of a path
- extname() 	Returns the file extension of a path
- format() 	Formats a path object into a path string
- isAbsolute() 	Returns true if a path is an absolute path, otherwise false
- join() 	Joins the specified paths into one
- normalize() 	Normalizes the specified path
- parse() 	Formats a path string into a path object
- posix 	Returns an object containing POSIX specific properties and methods
- relative() 	Returns the relative path from one specified path to another specified path
- resolve() 	Resolves the specified paths into an absolute path
- sep 	Returns the segment separator specified for the platform
- win32 	Returns an object containing Windows specific properties and methods

REF => https://www.w3schools.com/nodejs/ref_path.asp


## Difference between Relative path and absolute path: 

The path with reference to root directory is called absolute. <img src="http://www.foo.com/images/kitten.png"/>
The path with reference to current directory is called relative.  <img src="kitten.png"/>


## Express.js express.static() Function

The express.static() function is a built-in middleware function in Express. It serves static files and is based on serve-static. 
Parameters: The root parameter describes the root directory from which to serve static assets. Return Value: It returns an Object. 


Static file is a file that server doesn't need to change.
<<<<<<< HEAD



Require REF => https://nodejs.org/en/knowledge/getting-started/what-is-require/
=======
>>>>>>> b64040c90a3e1251fea4e5331c2af415b28dc849
