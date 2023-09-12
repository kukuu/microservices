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

### CD into fast-api and then run
uvicorn main:app --reload

### In another terminal CD into front-end/expense-management and then run 
- npm install
- npm run dev 
and go to /expenses page

### To see the expenses in express-server open another terminal do the following
- Go to root of the project
- run npm run dev
- open port 3011
- In the swagger doc experiment with expenses end points.

### Terminal Commands
1. <img width="273" alt="1- ms-terminal-1-command" src="https://github.com/kukuu/microservices/assets/10147828/18030ab0-62b6-4c4c-ac72-43775e4d7079">

2.  <img width="275" alt="2- ms-terminal-2-command" src="https://github.com/kukuu/microservices/assets/10147828/8e0f7f29-344a-4daa-900f-9de94aef7515">

3. <img width="165" alt="3- ms-terminal-2-command" src="https://github.com/kukuu/microservices/assets/10147828/68e45087-2050-4db9-8af7-1a5128db178a">

4. <img width="211" alt="3- ms-terminal-3-command" src="https://github.com/kukuu/microservices/assets/10147828/23597f47-c02c-434a-89af-da16e53ec8dc"> 

5. <img width="208" alt="4- ms-terminal-3-command" src="https://github.com/kukuu/microservices/assets/10147828/9a9db10c-167b-46f4-9b0d-27e70c5fa15e">







