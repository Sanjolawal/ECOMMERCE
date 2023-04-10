## [Demo](https://sanjo-ecommerce-demo.netlify.app/)
## Back-end of a medical app called Dalil

## What it is
This is a back-end medical application made with JavaScript, Node.js, Express, MongoDB and Mongoose.js for a client. 
It has 8 different routes, with web application all server requests method. Supports user authentication, authorization with json web token and follows all coding best
practice protocols.

## Technologies Used
* JavaScript (ES5)
* NodeJs
* ExpressJs
* Mongoose
* Json web token
* Bcrypt
* Cookie Parser
* Nodemon
* Dotenv
* Git/Github

## Several Routes created and their functions

# User Route
* Create user account - POST /users - name, email and password are required
* Read user account info - GET /users/me - Auth required (jwt)
* Update user account - PATCH /users/me - Auth required (jwt)
* Delete user account - DELETE /users/me - Auth required (jwt)
* Login user - POST /users/login - email and password must be provided
* Logout user (most recent session only) - POST /users/logout - Auth required (jwt)
* Logout user from all instances - POST /users/logoutall - Auth required (jwt)

# Appointment Route
* Create new appointment - POST /tasks - requires auth and task description optional completed value can be provided.

* Read task by appointment id - GET /tasks/:id - requires appointment id and Auth

* Update appointment by id - PATCH /tasks/:id - requires appointment id and Auth

* Delete appointment by id - DELETE /tasks/:id - requires appointment id and Auth

* Read all appointments (queries available) - GET /tasks? - requires appointment, all queries are optional

* Query options available:

     completed=false - can search by completed field, either true or false

     limit= 1 - 100,  can limit number of results sent back

     skip - can skip results

     sortBy=desc - can sort results in ascending or descending order
     
# Goal
The main goal was to create a fully functional and real time backend with MongoDB database as per client Medical app demands.
Users can create appointment, schedule meetings, delete account and even contact support for help. I was more happy building this, as it was my first big back-end develop
ment work.

# Author

Lawal Sanjo
