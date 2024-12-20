#  Micro-service API with NodeJS and Express Framework
This work provides a solid pattern used to scaffold and provide RAD for devleoping an ExpressJS (NodeJS) based microservice.

Microservice & SOA - https://github.com/kukuu/AGILITY/blob/master/SOA-and-MicroServices.md 

This work demonstrates several key design patterns that include:

- Creating complex routes with route nesting
- Use of most popular tools that are must have for any NodeJS based API project.
- Use of Sinon for stubbing, mocking and spying on unit tests.
- Use of supertest to unit and integration test HTTP endpoints and API endpoints.
- Testing promises with Jasmine, Sinon, Supertest and Chai.
- Separation of concerns through use of service classes for business logic, data access classes for database operations and pure routes for API endpoints.
- Exception handling and exception propagation

## What does it provide
This boilerplate provides pre-configured:

1. ExpressJS REST API template
2. Swagger documentation and Swagger UI
3. Jasmine, Sinon, Chai, Supertest configuration for Unit and integration tests. 
4. Pre-configured jasmine spec reporter
5. Jasmine Node Debug for debugging unit tests.
6. Fully configured istanbul test coverage
7. Winston logger for logging to file and console with daily rotating log file module. 

### Installing as node module
Boilerplate is also available as module from NPM and Yarn registry.

    npm install expressjs-microservice

Once you have installed the module, copy the expressjs-microservice to your project directory.

    cp -R ./node_modules/expressjs-microservice/* .    

## Getting started
Once you have installed the boilerplate, running it is easy:

Run

    npm install

Start the application using

    npm start

Point your browser at `http://localhost:3011`, you should see the swagger documentation for the boilerplate API.

>
> The base API is available at the route `/api` e.g. `http://localhost:3011/api/posts`.

> Service end point - https://jsonplaceholder.typicode.com/posts (services/PostServices.js)
>

#### Running unit tests
You can trigger unit tests that have full coverage using `istanbul` and spec reporting using `jasmine-spec-reporter` using the following command

    npm test

#### Running integration tests
All intgration tests whose names end in `-IT.js` for example `it/posts-IT.js` created under the `expressjs-microservice/it` directory will be executed as a part of the integration test command described below.

The name of the file must match the globbing pattern `**/*-IT.js`.

- `posts-IT.js` - Matched
- `posts-it.js` - Not matched

This can customized  by updating the `spec/support/jasmine-integ.json` file.

Run  integration test using the command:

    npm run integtest
    
## Making requests

    1. http://localhost:3019/api/posts
    2. http://localhost:3019/api/posts/post?postId=1
    3. http://localhost:3019/api/posts/5

## Flow Diagram
https://excalidraw.com/)https://excalidraw.com/


## Express Middlewares
In the context of a Node.js application using the Express framework, the code snippet 

```
app.use(bodyParser.urlencoded({ extended: false }));

```
 is used to configure middleware to handle incoming HTTP requests.

- The code is configuring middleware to parse incoming URL-encoded data from HTML forms in the request body and make it available in the req.body object for further processing in an Express application.

- app: Refers to the instance of the Express application.

- app.use(): This is a method in Express used to add middleware functions to the request processing pipeline.

- The code is configuring the bodyParser middleware to handle urlencoded data, which is typically submitted in HTML forms. The bodyParser middleware parses incoming request bodies and makes the data available in the req.body object.

- bodyParser.urlencoded(): This method of the bodyParser middleware is used to parse URL-encoded data from the request body.

- The options passed to bodyParser.urlencoded() include:

  - extended: false: This option specifies whether to use the querystring library to parse the data (when set to false) or to use the qs library (when set to true).
    
  - The extended option allows you to parse complex objects and arrays, but in this case, it's set to false to parse simpler data.

