const chai =  require('chai');
const chaiHttp = require('chai-http');
const { expect } = require('chai');
const server = require('../server');

//Assertion style
chai.should();
chai.use(chaiHttp);

describe("Washer Myorders API", ()=> {

    /**
    * login the washer to get tokenn
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
                    jwtToken = `Bearer ${response.body.token}`;
                    console.log(jwtToken);
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