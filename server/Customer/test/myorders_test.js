const chai = require('chai');
const server = require('../server');
const chaiHttp = require('chai-http');
const { expect } = require('chai');
const { response } = require('express');

//Assertion style
chai.should();
chai.use(chaiHttp);


describe('Customer Myorder API', ()=>{

    /**
     * logging in to recieve token 
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
                expect(response.body.should.have.property('token'));
                jwtToken = `Bearer ${response.body.token}`;
                done();
            })
        })
    })


    /**
     * Get list of accepted orders
    */
    describe("GET /accepted", ()=> {
        it("it should get list of accepted orders", (done)=>{
            chai.request(server)
                .get('/accepted')
                .set({"Authorization" : jwtToken})
                .end((err,response) =>{
                    response.should.have.status(201);
                    response.body.should.be.a('array');
                    done()
                })
        })
        it("it should not get list of accepted orders", (done)=>{
            chai.request(server)
                .get('/accepted')
                .end((err,response) =>{
                    response.should.have.status(401);
                    response.body.should.be.a('object');
                    done()
                })
        })
    })


    /**
    * Get list of pending orders
    */
   describe("GET /pending", ()=> {
        it("it should get list of pending orders", (done)=>{
            chai.request(server)
                .get('/pending')
                .set({"Authorization" : jwtToken})
                .end((err,response) =>{
                    response.should.have.status(201);
                    response.body.should.be.a('array');
                    done()
                })
        })
        it("it should not get list of accepted orders", (done)=>{
            chai.request(server)
                .get('/pending')
                .end((err,response) =>{
                    response.should.have.status(401);
                    response.body.should.be.a('object');
                    done()
                })
        })
    })


    /**
    * get list of completed and paid orders
    */
   describe("GET /completedAndPaid", ()=> {
        it("it should get list of completed and paid orders", (done)=>{
            chai.request(server)
                .get('/completedAndPaid')
                .set({"Authorization" : jwtToken})
                .end((err,response) =>{
                    response.should.have.status(201);
                    response.body.should.be.a('array');
                    done()
                })
        })
        it("it should not get list of completed and paid orders", (done)=>{
            chai.request(server)
                .get('/completedAndPaid')
                .end((err,response) =>{
                    response.should.have.status(401);
                    response.body.should.be.a('object');
                    done()
                })
        })
    })


    /**
    * Get list of completd but unpaid orders
    */
    describe("GET /completedAndUnpaid", ()=> {
        it("it should get list of completed and unpaid orders", (done)=>{
            chai.request(server)
                .get('/completedAndUnpaid')
                .set({"Authorization" : jwtToken})
                .end((err,response) =>{
                    response.should.have.status(201);
                    response.body.should.be.a('array');
                    done()
                })
        })
        it("it should not get list of completed and unpaid orders", (done)=>{
            chai.request(server)
                .get('/completedAndUnpaid')
                .end((err,response) =>{
                    response.should.have.status(401);
                    response.body.should.be.a('object');
                    done()
                })
        })
    })

    /**
    * Get list of cancelled orders
    */
    describe("GET /cancelled", ()=> {
        it("it should get list of cancelled orders", (done)=>{
            chai.request(server)
                .get('/cancelled')
                .set({"Authorization" : jwtToken})
                .end((err,response) =>{
                    response.should.have.status(201);
                    response.body.should.be.a('array');
                    done()
                })
        })
        it("it should not get list of cancelled orders", (done)=>{
            chai.request(server)
                .get('/cancelled')
                .end((err,response) =>{
                    response.should.have.status(401);
                    response.body.should.be.a('object');
                    done()
                })
        })
    })


    /**
    * Get list of inprocess orders
    */
    describe("GET /inprocess", ()=> {
        it("it should get list of inprocess orders", (done)=>{
            chai.request(server)
                .get('/inprocess')
                .set({"Authorization" : jwtToken})
                .end((err,response) =>{
                    response.should.have.status(201);
                    response.body.should.be.a('array');
                    done()
                })
        })
        it("it should not get list of inprocess orders", (done)=>{
            chai.request(server)
                .get('/inprocess')
                .end((err,response) =>{
                    response.should.have.status(401);
                    response.body.should.be.a('object');
                    done()
                })
        })
    })
})