const express = require('express');
const nunjucks = require('nunjucks');
const app = express();
app.use(express.static('public'));
const port = 3026;
//const port = 3001;
//host = 'localhost';
host = '127.0.0.1';
const events = require('./events.json');
const id = require('./id.json');
let clubMembers = [];

const bcrypt = require('bcryptjs');
let nRounds = 13;
const users = require('./clubUsersHash.json');

/* app.use(express.urlencoded({
  extended: true
})) */

//
const session = require('express-session');
const cookieName = "clubsid"; // Session ID cookie name, use this to delete cookies too.
app.use(session({
	secret: 'website development CSUEB',
	resave: false,
	saveUninitialized: false,
	name: cookieName // Sets the name of the cookie used by the session middleware
}));

// This initializes session state
const setUpSessionMiddleware = function (req, res, next) {
	console.log(`session object: ${JSON.stringify(req.session)}`);
	console.log(`session id: ${req.session.id}`);
	if (!req.session.user) {
		req.session.user = {
			loggedin: false
		};
	}
	next();
};

// User this middlewave to restrict paths only to admins
function checkAdminMiddleware(req, res, next) {
	if (req.session.user.role !== "admin") {
		//res.status(401).json({error: "Not permitted"});; //render the forbidden page?
		res.render('forbidden.njk',{title: "Page Forbidden - East Bay Mushroom Hunting Association"});
	} else {
		next();
	}
};

app.use(setUpSessionMiddleware);
//
let urlencodedParser = express.urlencoded({extended: true});

nunjucks.configure('templates', {
    autoescape: true,
    express: app
});

app.get('/', function (req, res) {
	var info = {title: "East Bay Mushroom Hunting Association", userRole:req.session.user.role};
	res.render('index.njk',info);
});

app.get('/index', function (req, res) {
	var info = {title: "East Bay Mushroom Hunting Association", userRole:req.session.user.role};
	res.render('index.njk',info);
});

app.get('/login', function (req, res) {
	var info1 = {title: "Login - East Bay Mushroom Hunting Association", userRole:req.session.user.role};
	res.render('login.njk',info1);
});

app.post('/loginResult',urlencodedParser, function(req, res) {
	let email = req.body.email;
	let password = req.body.password;
	// Find user
	let auser = users.find(function (user) {
		return user.email === email
	});
	if (!auser) {// Not found
		//throw new HttpException(400, "Bad Request");
		res.render('loginFail.njk',{title: "Login Failure- East Bay Mushroom Hunting Association"});
		return;
	}
	let verified = bcrypt.compareSync(password, auser.passHash);
	if (verified) {
		let oldInfo = req.session.user;
		req.session.regenerate(function (err) {
			if (err) {
				console.log(err);
			}
			req.session.user = Object.assign(oldInfo, auser, {
				loggedin: true
			});
			res.render('loginSucc.njk',{title: "Welcome - East Bay Mushroom Hunting Association", userEmail:email, userRole:auser.role});
		});
	} else {
		res.render('loginFail.njk',{title: "Login Failure- East Bay Mushroom Hunting Association"});
	}
});


app.get('/logout', function (req, res) {
	let options = req.session.cookie;
	req.session.destroy(function (err) {
		if (err) {
			console.log(err);
		}
		res.clearCookie(cookieName, options); // the cookie name and options
		res.render('logout.njk',{title: "Logged Out- East Bay Mushroom Hunting Association"});
	})
});

app.get('/activities', function (req, res) {
	var info2 = {title: "Club Activities - East Bay Mushroom Hunting Association",events: events, userRole: req.session.user.role};
	res.render('activities.njk',info2);
});

app.get('/addActivity',checkAdminMiddleware, function (req, res) {
	let tempInfo = {title: "Add Activity - East Bay Mushroom Hunting Association", userRole: req.session.user.role};
	res.render('addAct.njk',tempInfo);
});


app.get('/addingEvent', function (req, res) {
	var obj = {"activity": " ", "dates": [" "] };
	obj.activity = req.query.name;
	let tempArray = [req.query.dates]
	obj.dates = tempArray;
	events.clubEvents.push(obj);
	
	if (events.clubEvents.length > 100) { // only keep the last 100 activities added
		events.clubEvents.shift(); // removes the first item
	}
	res.render('eventAdded.njk',{title: "Activity Added- East Bay Mushroom Hunting Association", userRole: req.session.user.role});
});

app.get('/membership', function (req, res) {
	var info3 = {title: "Sign Up - East Bay Mushroom Hunting Association", userRole:req.session.user.role};
	res.render('membership.njk',info3);
});

app.post('/membershipSignup',urlencodedParser, function(req, res) {
	let salt = bcrypt.genSaltSync(nRounds);
	let passHash = bcrypt.hashSync(req.body.password, salt);
	req.body.hash = passHash;
	delete req.body.password;
	
	console.log(req.body);
	
	clubMembers.push(req.body);
	res.render('membershipSucc.njk',{title: "Thank you for signing up! - East Bay Mushroom Hunting Association", 
	userEmail:req.body.email, userComments:req.body.comments, userName:req.body.name, userExp:req.body.exp, userRole:req.session.user.role});
})

app.get('/memberList',checkAdminMiddleware, function (req, res) {
	res.render('memberList.njk',{title: "Member List - East Bay Mushroom Hunting Association",members: users, userRole: req.session.user.role});
});

app.get('/serverId', function (req, res) {
	res.json(id);
});


app.listen(port, host, function () {
console.log(`deployTest.js app listening on IPv4: ${host}:${port}`);
});