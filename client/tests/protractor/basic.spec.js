// Use the external Chai As Promised to deal with resolving promises in
// expectations.
var chai 					= require('chai');
var chaiAsPromised 			= require('chai-as-promised');

chai.use(chaiAsPromised);

var expect = chai.expect;


describe('Nemam Amma Bhagavan Sharanam controller', function() {
	this.timeout(200000);


	it("should open the browser", function() {
                console.log("Vaideeshwara Nemam Amma Bhagavan Sharanam");
        
		// 1. Get the login button
		var login_btn = $('.btn')[0];

		// 2. Click login
		login_btn.click();

		// 3. Expect admin_login btn to be present
		var admin_login_btn = $('#admin_login');

		// 4. Esnure the button exists
		expect(admin_login_btn.length).to.equal(1);

               console.log("Nemam Amma Bhagavan Sharanam -- great");
 	});
});
