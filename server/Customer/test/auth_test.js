const chai = require('chai');
const server = require('../server');
const chaiHttp = require('chai-http');

//Assertion style
chai.should();
chai.use(chaiHttp);

describe('Customer Auth API', ()=>{

    /**
     * Test the POST signup route
     */
    describe("POST /signup", () => {
        it("it should add a user", (done) =>{
          const userCredentials =  {
            "email" : "abe@gmail.com",
            "password" : "abc123456"
        }
          chai.request(server)
            .post("/signup")
            .send(userCredentials)
            .end((err, response) =>{
              response.should.have.status(201);
              response.body.should.be.a('object');
              done();
            })
      })
      it("it should not add a user", (done) =>{
        const userCredentials =  {
          "email" : "abc",
          "password" : "abc123"
      }
        chai.request(server)
          .post("/signup")
          .send(userCredentials)
          .end((err, response) =>{
            response.should.have.status(400);
            response.body.should.be.a('object');
            done();
          })
      })
      it("it should not add a user", (done) =>{
        const userCredentials =  {
          "email" : "abc@",
          "password" : "abc12345"
      }
        chai.request(server)
          .post("/signup")
          .send(userCredentials)
          .end((err, response) =>{
            response.should.have.status(400);
            response.body.should.be.a('object');
            done();
          })
      })
    })

    

    /**
     * Test the POST login route
    */
   describe("POST /login", () => {
        it("it should login the customer", (done) =>{
        const userCredentials =  {
            "email" : "alishak@gmail.com",
            "password" : "123456789"
        }
        chai.request(server)
            .post("/login")
            .send(userCredentials)
            .end((err, response) =>{
            response.should.have.status(201);
            response.should.be.a('object');
            done();
            })
        })

    it("it should not login the customer", (done) =>{
        const userCredentials =  {
        "email" : "ali@gmail.com",
        "password" : "123"
        }
        chai.request(server)
        .post("/login")
        .send(userCredentials)
        .end((err, response) =>{
            response.should.have.status(400);
            response.should.be.a('object');
            done();
        })
        })

    it("it should not login the customer", (done) =>{
          const userCredentials =  {
            "email" : "alishak@gmail.com",
            "password" : "1234"
          }
          chai.request(server)
          .post("/login")
          .send(userCredentials)
          .end((err, response) =>{
              response.should.have.status(400);
              response.should.be.a('object');
              done();
          })
          })

  })
})