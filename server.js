// server.js
// -- Setup -- 
var express    		= require('express');
var app        		= express();
var morgan     		= require('morgan'); 						// For logging to console
var bodyParser 		= require('body-parser'); 					// Pull info from html POST in req.body
var methodOverride 	= require('method-override');				// simulate DELETE and PUT
var mongoose   		= require('mongoose'); 						// mongo db

// Setup passport for logging in
var passport 		= require('passport');
var cookieParser 	= require('cookie-parser');
var flash   		= require('connect-flash');
var session 		= require('express-session');
var LocalStrategy 	= require('passport-local').Strategy;

var mongo_uri		= "mongodb://deepakabs:deepakabs@ds015760.mlab.com:15760/ammabhagavansharanam" || process.env.MONGOHQ_URL || 'mongodb://127.0.0.1/HelloMongoose';
mongoose.connect(mongo_uri);     								// connect to mongoDB database via heroku or localhost

app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());
app.use(cookieParser()); 										// read cookies (needed for auth)
// Configure passport
app.use(session({
  secret: 'nemam amma bhagavan sharanam',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: true,
    maxAge: new Date(Date.now() + 3600000)
  }
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
require('./lib/config/passport')(passport); // pass passport for configuration

// Routes
// load our routes and pass in our app and fully configured passport
require('./lib/routes')(app, passport); 


var port = process.env.PORT || 5000;

// listen (start app with node server.js)
var server = app.listen(port, function () {

  var host = server.address().address
  var port = server.address().port

}); // Express server

module.exports = server


       
