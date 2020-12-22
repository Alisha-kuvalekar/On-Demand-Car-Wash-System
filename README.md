# On Demand Car Wash
This application provides car washes to customers at the given location and time, by the registered washers on the application. The customer will send wash 
requests to washers, which will then, be accepted or rejected by the washer.
The application is built using **MEAN stack** and follows a 
**Microservice** architecture. There are three microservices **Admin, Washer and Customer**.


## Installation

Use the package manager [npm](https://nodejs.org/en/download/) for installation.

```
npm install 
```
 
## Usage

- Use the following command on each microservice to run the server

  ```
  nodemon server
  ```

- Run the following command to start angular server 

  ```
  ng serve
  ```
## Run tests

Unit testing of the services is done using [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/).
Run the following command to run the tests.

```
npm run test
```

  
## Built with 

[Visual studio code](https://code.visualstudio.com/)
