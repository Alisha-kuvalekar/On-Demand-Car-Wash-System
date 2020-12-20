const chai  = require('chai');
const server = require ('../server');
const chaiHttp = require('chai-http');
const { expect } = require('chai');
const { response } = require('express');

//Assertion style
chai.should();
chai.use(chaiHttp);


describe('Customer Profile API', ()=>{

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
                    console.log(resjwtToken);
                    done();
                })
        })
    })

    /**
    * Create new profile
    */
    describe("POST /profile",()=>{
        it("it should create a new profile", (done)=>{
            const profileDetails = {
                "name" : "Snowbell",
                "mobile" : "7506538459",
                "car" : {
                    "carName" : "AUDI",
                    "carModel" : "F87"
                },
                "noOfWashes" : 7,
                "addresses": {
                    "country" : "INDIA",
                    "city" : "Badlapur",
                    "address" : "1,Grand Chariot,East",
                    "zipcode" :421503
                }
            }
            chai.request(server)
                .post("/profile")
                .send(profileDetails)
                .set({"Authorization": resjwtToken })
                .end((err, response) =>{
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    done();
            })
        })

        it("it should not create a new profile", (done)=>{
            const profileDetails = {
                "name" : "Snowbell",
                "mobile" : "7506538459",
                "noOfWashes" : 7,
                "addresses": {
                    "country" : "INDIA",
                    "city" : "Badlapur",
                    "address" : "1,Grand Chariot,East",
                    "zipcode" :421503
                }
            }
            chai.request(server)
                .post("/profile")
                .send(profileDetails)
                .set({"Authorization": resjwtToken })
                .end((err, response) =>{
                    response.should.have.status(400);
                    response.body.should.be.a('object');
                    done();
            })
        })

        it("it should not create a new profile", (done)=>{
            const profileDetails = {
                "name" : "Snowbell",
                "mobile" : "7506538459",
                "noOfWashes" : 7,
                "addresses": {
                    "country" : "INDIA",
                    "city" : "Badlapur",
                    "address" : "1,Grand Chariot,East",
                    "zipcode" :"421503"
                }
            }
            chai.request(server)
                .post("/profile")
                .send(profileDetails)
                .set({"Authorization": resjwtToken })
                .end((err, response) =>{
                    response.should.have.status(400);
                    response.body.should.be.a('object');
                    done();
            })
        })
    })



    /**
    * Get a specific profile 
    */
     describe("GET /profile", ()=>{
        it("it should get profile of specific customer",(done)=>{
            chai.request(server)
                .get("/profile")
                .set({"Authorization" : resjwtToken})
                .end((err,response)=>{
                    response.should.have.status(201);
                    response.body.should.be.a('array');
                    done();
                })
        })

        it("it should not  get profile of specific customer",(done)=>{
            chai.request(server)
                .get("/profile")
                .end((err,response)=>{
                    response.should.have.status(401);
                    response.body.should.be.a('object');
                    done();
                })
        })
     })

    
    /**
    * Update profile details
    */
   describe("PUT /profile",()=>{
        it("it should update the profile details", (done)=>{
            const newprofileDetails = {
                "name" : "Snowbell",
                "mobile" : "7506538459",
                "car" : {
                    "carName" : "AUDI",
                    "carModel" : "F8745"
                },
                "noOfWashes" : 8,
                "addresses": {
                    "country" : "INDIA",
                    "city" : "Goregaon",
                    "address" : "1,Grand Chariot,East",
                    "zipcode" :421422
                }
            }
            chai.request(server)
                .put("/profile")
                .send(newprofileDetails)
                .set({"Authorization": resjwtToken })
                .end((err, response) =>{
                    response.should.have.status(201);
                    response.body.should.be.a('object');
                    done();
            })
        })

        it("it should not update the profile details", (done)=>{
            const profileDetails = {
                "name" : "Snowbell",
                "mobile" : "7506538459",
                "noOfWashes" : 7,
                "addresses": {
                    "country" : "INDIA",
                    "city" : "Badlapur",
                    "address" : "1,Grand Chariot,East",
                    "zipcode" : "421503"
                }
            }
            chai.request(server)
                .post("/profile")
                .send(profileDetails)
                .set({"Authorization": resjwtToken })
                .end((err, response) =>{
                    response.should.have.status(400);
                    response.body.should.be.a('object');
                    done();
            })
        })

        it("it should not update the profile details", (done)=>{
            const profileDetails = {
                "name" : "Snowbell",
                "mobile" : "7506538459",
                "noOfWashes" : 7,
                "addresses": {
                    "country" : "INDIA",
                    "city" : "Badlapur",
                    "address" : "1,Grand Chariot,East",
                    "zipcode" :"421503"
                }
            }
            chai.request(server)
                .post("/profile")
                .send(profileDetails)
                .end((err, response) =>{
                    response.should.have.status(401);
                    response.body.should.be.a('object');
                    done();
            })
        })
    })
})