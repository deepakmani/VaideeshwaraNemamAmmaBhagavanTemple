var chai                = require('chai');
var expect              = require('chai').expect;

var supertest   = require('supertest');
var server              = require('../../server.js');
var chaiHttp    = require('chai-http');
chai.use(chaiHttp);

// Use chai_http to run assertions against response
var chai_http;

// User to make requests to
var agent;

// Test Suite: GetMiracles
describe("Get Miracles", function() {
        this.timeout(15000);

        // Test Case: 1 - it should getProspect

        // 1. SignIn to superAgent
        before(function(done) {
                // Setup the agent
                agent = chai.request.agent(server);

                //create test prospect
       
              // Login

			done();
       });
       it("should expect true to be true", function() {
      
          // Login
		agent.get("/")
		.end(function (err, res) {

     		     expect(res).to.have.status(200);

			// console.log("Nemam Amma Bhagavan Sharanam --  Res" + res.status);
			done();
                     expect(true).to.be.false
               });
      });
});



