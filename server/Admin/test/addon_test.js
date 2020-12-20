const chai = require('chai');
const chaiHttp = require('chai-http');
const { response } = require('express');
const server = require('../server');
const { expect } = require('chai');


//Assertion style
chai.should();
chai.use(chaiHttp);



describe("ADMIN Addon API", ()=> {

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
    * GET addons route
    */

    describe("GET /addons",()=> {
        it("it should get the list of all addons",(done)=>{
            chai.request(server)
                .get("/addons")
                .set({"Authorization" : resjwtToken})
                .end((err,response)=>{
                    response.should.have.status(201);
                    response.body.should.be.a('array');
                    done()
                })
        })
        it("it should not get the list of all addons",(done)=>{
            chai.request(server)
                .get("/addons")
                .end((err,response)=>{
                    response.should.have.status(401);
                    response.body.should.be.a('object');
                    done()
                })
        })
    })

    /**
    * POST addons route
    */

    describe("POST /addons",()=> {
        it("it should create a new addon",(done)=>{
            const addonDetails = {
                name : "fire coating ",
                forServices : [
                    "platinum wash",
                    "repair",
                    "gold wash"
                ],
                cost : 1799
            }
            chai.request(server)
                .post("/addons")
                .send(addonDetails)
                .set({"Authorization" : resjwtToken})
                .end((err,response)=>{
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    result = response.body._id;
                    done()
                })
        })
        it("it should not create a new addon",(done)=>{
            const addonDetails = {
                name : "fire coating ",
                forServices : [
                    "platinum wash",
                    "repair",
                    "gold wash"
                ]
            }
            chai.request(server)
                .post("/addons")
                .send(addonDetails)
                .set({"Authorization" : resjwtToken})
                .end((err,response)=>{
                    response.should.have.status(400);
                    response.body.should.be.a('object');
                    done()
                })
        })
    })

    /**
    * PUT addons route
    */

    describe("PUT /addons",()=> {
        it("it should update the addon",(done)=>{
            const newaddonDetails = {
                cost : 1999
            }
            const id = result
            chai.request(server)
                .put(`/addons/${id}`)
                .send(newaddonDetails)
                .set({"Authorization" : resjwtToken})
                .end((err,response)=>{
                    response.should.have.status(201);
                    response.body.should.be.a('object');
                    done()
                })
        })
        it("it should not update the addon",(done)=>{
            const newaddonDetails = {
                cost : 1999
            }
            chai.request(server)
                .post("/addons")
                .send(newaddonDetails)
                .end((err,response)=>{
                    response.should.have.status(401);
                    response.body.should.be.a('object');
                    done()
                })
        })
    })


    /**
    * DELETE addons route
    */

    describe("DELETE /addons",()=> {
        it("it should delete the addon",(done)=>{
            const id = result
            chai.request(server)
                .delete(`/addons/${id}`)
                .set({"Authorization" : resjwtToken})
                .end((err,response)=>{
                    response.should.have.status(201);
                    response.body.should.be.a('object');
                    done()
                })
        })
        it("it should not delete the addon",(done)=>{
            const id = result
            chai.request(server)
                .delete(`/addons/${id}`)
                .end((err,response)=>{
                    response.should.have.status(401);
                    response.body.should.be.a('object');
                    done()
                })
        })
    })

})