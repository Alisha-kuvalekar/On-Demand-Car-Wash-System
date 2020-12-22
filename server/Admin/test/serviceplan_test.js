const chai = require('chai');
const chaiHttp = require('chai-http');
const { response } = require('express');
const server = require('../server');
const { expect } = require('chai');


//Assertion style
chai.should();
chai.use(chaiHttp);


describe("Admin service API", ()=> {

    /**
    * logging in admin to get token
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
                    jwtToken = `Bearer ${response.body.token}`;
                    done();
                })
        })
   })


   /**
   * GET services route
   */
    describe("GET /services",()=> {
        it("it should return list of all services",(done)=> {
            chai.request(server)
                .get("/services")
                .set({"Authorization": jwtToken})
                .end((err,response)=>{
                    response.should.have.status(201);
                    response.body.should.be.a('array');
                    done()
                })
        })
        it("it should not return list of all services",(done)=> {
            chai.request(server)
                .get("/services")
                .end((err,response)=>{
                    response.should.have.status(401);
                    response.body.should.be.a('object');
                    done()
                })
        })
    })


   /**
   * POST services route
   */
    describe("POST /services",()=> {
        it("it should create a new service",(done)=> {
            const serviceDetails = {
                name : "platinum gold wash 2",
                time : "40",
                cost :  5999,
                description : "Platinum wash includes platinum stuff with your car."
            }
            chai.request(server)
                .post("/services")
                .send(serviceDetails)
                .set({"Authorization": jwtToken})
                .end((err,response)=>{
                    response.should.have.status(201);
                    response.body.should.be.a('object');
                    result = response.body._id;
                    done()
                })
        })
        it("it should not create a new service",(done)=> {
            const serviceDetails = {
                name : "platinum gold wash",
                cost :  5999,
                description : "Platinum wash includes platinum stuff with your car."
            }
            chai.request(server)
                .get("/services")
                .send(serviceDetails)
                .end((err,response)=>{
                    response.should.have.status(401);
                    response.body.should.be.a('object');
                    done()
                })
        })
    })


   /**
   * PUT services route
   */
  describe("PUT /services",()=> {
        it("it should update the service",(done)=> {
            const newserviceDetails = {
                name : "premium gold wash",
                time : "40",
                cost :  5999,
                description : "Platinum wash includes platinum stuff with your car."
            }
            const serviceId = result
            chai.request(server)
                .put(`/services/${serviceId}`)
                .send(newserviceDetails)
                .set({"Authorization": jwtToken})
                .end((err,response)=>{
                    response.should.have.status(201);
                    response.body.should.be.a('object');
                    done()
                })
        })

        it("it should not update the service",(done)=> {
            const newserviceDetails = {
                name : "premium gold wash",
                time : "40",
                cost :  5999
            }
            const serviceId = result
            chai.request(server)
                .put(`/services/${serviceId}`)
                .send(newserviceDetails)
                .end((err,response)=>{
                    response.should.have.status(401);
                    response.body.should.be.a('object');
                    done()
                })
        })
    })


    
   /**
   * DELETE services route
   */
    describe("DELETE /services",()=> {
        it("it should delete the service by id",(done)=> {
            const serviceId = result
            chai.request(server)
                .delete(`/services/${serviceId}`)
                .set({"Authorization": jwtToken})
                .end((err,response)=>{
                    response.should.have.status(201);
                    response.body.should.be.a('object');
                    done()
                })
        })

        it("it should not delete the service",(done)=> {
            const serviceId = '5fd714592301250588fbec33'
            chai.request(server)
                .delete(`/services/${serviceId}`)
                .end((err,response)=>{
                    response.should.have.status(401);
                    response.body.should.be.a('object');
                    done()
                })
        })
    })

})