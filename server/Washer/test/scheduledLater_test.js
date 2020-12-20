const chai =  require('chai');
const chaiHttp = require('chai-http');
const { expect } = require('chai');
const server = require('../server');
const { response } = require('express');

//Assertion style
chai.should();
chai.use(chaiHttp);


describe("Washer scheduledOrders API", ()=> {

    /**
    * login the washer to get token
    */

    describe("Washer Login API", ()=> {
        const loginCredentails = {
            email: "ujwala@yahoo.in",
            password : "ujwala123"
        }
        it("it should login the washer", (done)=> {
            chai.request(server)
                .post("/login")
                .send(loginCredentails)
                .end((err,response)=> {
                    response.should.have.status(201);
                    response.body.should.be.a('object');
                    expect(response.body.should.have.property('token'));
                    resjwtToken = `Bearer ${response.body.token}`;
                    done();
                })
        })
    })

    /**
    * GET Scheduled order 
    */

    describe("GET /scheduledLater",()=> {
        it("it should get list of scheduled orders",(done)=>{
            chai.request(server)
                .get("/scheduledLater")
                .set({"Authorization" : resjwtToken})
                .end((err,response)=>{
                    response.should.have.status(201);
                    response.body.should.be.a('array');
                    done();
                })
        })
        it("it should not get list of scheduled orders",(done)=>{
            chai.request(server)
                .get("/scheduledLater")
                .end((err,response)=>{
                    response.should.have.status(401);
                    response.body.should.be.a('object');
                    done();
                })
        })
    })


})