const chai =  require('chai');
const chaiHttp = require('chai-http');
const { response } = require('express');
const server = require('../server');

//Assertion style
chai.should();
chai.use(chaiHttp);

describe("Washer Auth API", ()=> {

    /**
    * POST signup route
    */
    
    describe("POST /signup", ()=> {
        it("it should signup a new washer", (done)=> {
            const signupcredentials ={
                email : "abcde@yahoo.in",
                password : "abc1234567"
            }
            chai.request(server)
                .post("/signup")
                .send(signupcredentials)
                .end((err,response)=>{
                    response.should.have.status(201);
                    response.body.should.be.a('string');
                    done()
                })
        })

        it("it should not signup a new washer", (done)=> {
            const signupcredentials ={
                email : "abcd@yahoo.in",
                password : "abc1"
            }
            chai.request(server)
                .post("/signup")
                .send(signupcredentials)
                .end((err,response)=>{
                    response.should.have.status(400);
                    response.body.should.be.a('object');
                    done()
                })
        })

        
        it("it should not signup a new washer", (done)=> {
            const signupCredentials ={
                email : "abcd@yahoo.in",
                password : "abc1234567"
            }
            chai.request(server)
                .post("/signup")
                .send(signupCredentials)
                .end((err,response)=>{
                    response.should.have.status(400);
                    response.body.should.be.a('object');
                    done()
                })
        })

    })


    /**
    * POST login route
    */
    
    describe('POST /login',()=>{
        it("it should login the washer", (done)=> {
            const loginCredentials = {
                email : "ujwala@yahoo.in",
                password : "ujwala123"
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

        it("it should not login the washer", (done)=> {
            const loginCredentials = {
                email : "ujwala@yahoo",
                password : "ujwala123"
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

        it("it should not login the washer", (done)=> {
            const loginCredentials = {
                email : "ujwala@yahoo.in",
                password : "asdjkd"
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