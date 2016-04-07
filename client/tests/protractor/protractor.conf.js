exports.config = {
			framework:  	"mocha",
			capabilities:  	{
				specs: 				["basic.spec.js"],
				seleniumAddress: 	"http://localhost:4444/wd/hub",
				browserName: 		"Chrome"
			},
			onPrepare: function() {
						global.EC = protractor.ExpectedConditions;

						// Visit homepage and login -- Use localhost
						browser.driver.get("https://fierce-reef-4088.herokuapp.com/login");


					},
			allScriptsTimeout: 50000
}