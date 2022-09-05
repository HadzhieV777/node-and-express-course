MVC

The acronym MVC stands for Model, View, Controller, and is a way of separating concerns so that each part of our app has a specific responsibility. Lets break down what each of these topics do individually:

    Model — Is what data the app contains. It defines the shape of what our objects look like and the form this data should take.
    View — This sets up how our data should be displayed and presented to the user. An HTML page would be a view hence in most MVC frameworks these are contained within a ‘views’ folder.
    Controller — Is the logic that will update either the model or view in response to user input.

The MVC pattern is not unique to Express at all and can be found across multiple frameworks such as AngularJS and Ruby On Rails albeit each with different implementations.

A common analogy used to explain MVC is that of a restaurant. In this restaurant there is a Table, a Waiter, and a Chef. You are sitting at the Table and are privy to how the food is presented. Thus the Table is the View. The Waiter is in charge of taking your requests and interacting with both you and the kitchen (the Chef). Thus the Waiter is the Controller. Finally the Chef is the one who knows what the food is supposed to look like, what ingredients the food is supposed to have etc. The Chef is the Model. 

REF => https://codesource.io/guide-to-mvc-architectural-pattern-the-implementation-with-expressjs/

More REF => https://www.c-sharpcorner.com/blogs/how-to-setup-mvc-design-pattern-in-express