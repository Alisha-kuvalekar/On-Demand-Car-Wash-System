const chai = require('chai');
const chaiHttp = require('chai-http');
const { response } = require('express');
const server = require('../server');
const { expect } = require('chai');


//Assertion style
chai.should();
chai.use(chaiHttp);

describe("ADMIN washer approval API", ()=> {

    /**
    * logging in to get the token
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
                    expect(response.body.should.have.property('token'));
                    resjwtToken = `Bearer ${response.body.token}`;
                    done();
                })
        })
    })

    /**
    * GET all washers route
    */

    describe('GET /washers',()=> {
        it("it should get list of all washers", (done) => {
            chai.request(server)
                .get("/washers")
                .set({"Authorization" : resjwtToken})
                .end((err,response)=> {
                    response.should.have.status(201);
                    response.body.should.be.a('array');
                    done()
                })
        })
        it("it should not get list of all washers", (done) => {
            chai.request(server)
                .get("/washers")
                .end((err,response)=> {
                    response.should.have.status(401);
                    response.body.should.be.a('object');
                    done()
                })
        })
    })

    /**
    * GET all unapproved washers route
    */

    describe('GET /washers',()=> {
        it("it should get list of all unapproved washers", (done) => {
            chai.request(server)
                .get("/washer")
                .set({"Authorization" : resjwtToken})
                .end((err,response)=> {
                    response.should.have.status(201);
                    response.body.should.be.a('array');
                    done()
                })
        })
        it("it should not get list of all unapproved washers", (done) => {
            chai.request(server)
                .get("/washer")
                .end((err,response)=> {
                    response.should.have.status(401);
                    response.body.should.be.a('object');
                    done()
                })
        })
    })

    /**
    * Put washer route
    */

    describe('PUT /washers',()=> {
        it("it should update the washers approved status", (done) => {
            const id = '5fdbc09d3e1d233960b92476'
            chai.request(server)
                .put(`/washer/${id}`)
                .set({"Authorization" : resjwtToken})
                .end((err,response)=> {
                    response.should.have.status(201);
                    response.body.should.be.a('object');
                    done()
                })
        })
        it("it should not update the washers approved status", (done) => {
            const id = '5fdbc09d3e1d233960b92476'
            chai.request(server)
                .put(`/washer/${id}`)
                .end((err,response)=> {
                    response.should.have.status(401);
                    response.body.should.be.a('object');
                    done()
                })
        })
    })


    /**
    * DELETE washer route
    */

    describe('DELETE /washers',()=> {
        it("it should delete the washer", (done) => {
            const id = '5fdbc09d3e1d233960b92476'
            chai.request(server)
                .delete(`/washer/${id}`)
                .set({"Authorization" : resjwtToken})
                .end((err,response)=> {
                    response.should.have.status(201);
                    response.body.should.be.a('object');
                    done()
                })
        })
        it("it should not delete the washer", (done) => {
            const id = '5fdbc09d3e1d233960b92476'
            chai.request(server)
                .delete(`/washer/${id}`)
                .end((err,response)=> {
                    response.should.have.status(401);
                    response.body.should.be.a('object');
                    done()
                })
        })
    })
})