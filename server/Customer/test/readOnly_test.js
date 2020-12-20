const chai  = require('chai');
const server = require ('../server');
const chaiHttp = require('chai-http');
const { expect } = require('chai');
const { response } = require('express');

//Assertion style
chai.should();
chai.use(chaiHttp);

describe('Customer login api',()=>{

    /**
    *  logging in to get token 
    */
    describe("POST /login", () => {
        it("it should login the customer", (done) =>{
            const userCredentials =  {
                "email" : "snowbell@outlook.com",
                "password" : "snowbell123"
            }
            chai.request(server)
                .post("/login")
                .send(userCredentials)
                .end((err, response) =>{
                    response.should.have.status(201);
                    response.should.be.a('object');
                    expect(response.body.should.have.property('token'));
                    resjwtToken = `Bearer ${response.body.token}`;
                    done();
                })
        })
    })
})

describe('Customer cars API', ()=>{
    
    /**
    * GET active cars list 
    */
    describe("GET /cars",()=>{
        it("it should get the list of cars", (done) => {
            chai.request(server)
                .get("/cars")
                .set({"Authorization" : resjwtToken})
                .end((err,response) =>{
                    response.should.have.status(201);
                    response.body.should.be.a('array');
                    done()
                })
        })

        it("it should not get the list of cars", (done) => {
            chai.request(server)
                .get("/cars")
                .end((err,response) =>{
                    response.should.have.status(401);
                    response.body.should.be.a('object');
                    done()
                })
        })
    })
})


describe('Customer find washers API', ()=>{
    
    /**
    * GET washers list 
    */
    describe("GET /findWashers",()=>{
        it("it should get the list of washers", (done) => {
            chai.request(server)
                .get("/findWashers")
                .set({"Authorization" : resjwtToken})
                .end((err,response) =>{
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                    done()
                })
        })

        it("it should not get the list of washers", (done) => {
            chai.request(server)
                .get("/findWashers")
                .end((err,response) =>{
                    response.should.have.status(401);
                    response.body.should.be.a('object');
                    done()
                })
        })
    })
})


describe('Customer leaderboard API', ()=>{
    
    /**
    * GET leaderboard list
    */

    describe("GET /leaderboard",()=>{
        it("it should get the leaderboard list", (done) => {
            chai.request(server)
                .get("/leaderboard")
                .set({"Authorization" : resjwtToken})
                .end((err,response) =>{
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                    done()
                })
        })

        it("it should not get the leaderboard list", (done) => {
            chai.request(server)
                .get("/leaderboard")
                .end((err,response) =>{
                    response.should.have.status(401);
                    response.body.should.be.a('object');
                    done()
                })
        })
    })

})

describe('Customer services API', ()=>{
    
    /**
    * GET services list 
    */

    describe("GET /services",()=>{
        it("it should get the list of services", (done) => {
            chai.request(server)
                .get("/services")
                .set({"Authorization" : resjwtToken})
                .end((err,response) =>{
                    response.should.have.status(201);
                    response.body.should.be.a('array');
                    done()
                })
        })

        it("it should not get the list of services", (done) => {
            chai.request(server)
                .get("/services")
                .end((err,response) =>{
                    response.should.have.status(401);
                    response.body.should.be.a('object');
                    done()
                })
        })
    })

})

describe('Customer addons API', ()=>{
    
    /**
    * GET addons list 
    */
    const serviceName = 'basic wash';
    describe("GET /addons",()=>{
        it("it should get the addons list", (done) => {
            chai.request(server)
                .get(`/addons/:${serviceName}`)
                .set({"Authorization" : resjwtToken})
                .end((err,response) =>{
                    response.should.have.status(201);
                    response.body.should.be.a('array');
                    done()
                })
        })

        it("it should not get the addons list", (done) => {
            chai.request(server)
                .get(`/addons/:${serviceName}`)
                .end((err,response) =>{
                    response.should.have.status(401);
                    response.body.should.be.a('object');
                    done()
                })
        })
    })

})


describe('Customer scheduledLater API', ()=>{
    
    /**
    * GET list of orders scheduled for later
    */

    describe("GET /scheduledLater",()=>{
        it("it should get list of orders scheduled for later", (done) => {
            chai.request(server)
                .get("/scheduledLater")
                .set({"Authorization" : resjwtToken})
                .end((err,response) =>{
                    response.should.have.status(201);
                    response.body.should.be.a('array');
                    done()
                })
        })

        it("it should not get list of orders scheduled for later", (done) => {
            chai.request(server)
                .get("/scheduledLater")
                .end((err,response) =>{
                    response.should.have.status(401);
                    response.body.should.be.a('object');
                    done()
                })
        })
    })

})