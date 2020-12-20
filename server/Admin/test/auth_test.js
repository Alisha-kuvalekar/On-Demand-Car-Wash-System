const chai = require('chai');
const chaiHttp = require('chai-http');
const { response } = require('express');
const server = require('../server');

//Assertion style
chai.should();
chai.use(chaiHttp);

describe("Admin Auth API", ()=> {
    /**
     * POST login the admin
     */

    describe("POST /login",()=> {
        it("it should login the admin", (done)=> {
            const loginCredentials ={
                email : 'alisha@gmail.com',
                password : 'test1234' 
            }
            chai.request(server)
                .post("/login")
                .send(loginCredentials)
                .end((err,response)=>{
                    response.should.have.status(201);
                    response.body.should.be.a('object');
                    done()
                })
        })
        it("it should not login the admin", (done)=> {
            const loginCredentials ={
                email : 'alishak@gmail.com',
                password : 'test123' 
            }
            chai.request(server)
                .post("/login")
                .send(loginCredentials)
                .end((err,response)=>{
                    response.should.have.status(400);
                    response.body.should.be.a('object');
                    done()
                })
        })
    })
})