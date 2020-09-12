/* Initial Setup */
const express 		= require("express");
const bodyParser 	= require("body-parser");
const path			= require("path");
const cors			= require("cors");
const Twit 			= require('twit');

/* Initialize Express app */
const app 			= express(); 

/* Middleware */
// Form data middleware.
app.use(bodyParser.urlencoded({
	extended: false
}));
// JSON Body middleware.
app.use(bodyParser.json());
// Cors middleware.
app.use(cors());
// Setting up static directory.
app.use(express.static(path.join(__dirname, "public")));


/* Setting up on port */
const PORT = process.env.PORT || 3000;
app.set("Port", PORT);

/* Importing Twitter API Keys, setting up REST access. */
const config 		= require(path.join(__dirname, "public/keys.js"));
const T 			= new Twit(config);

/* Importing top 100 twitter users */
const users			= require(path.join(__dirname, "public/users.js"));

/* Post Route */
app.post("/", (req, res) => {
	// Importing some functions from static files. 
	let output 	= require(path.join(__dirname, "public/values.js"))();
	let date	= require(path.join(__dirname, "public/week-ago.js"))();
	let query 	= "from:" + users[output.answer] + " since:" + date;

	// Getting Twitter names.
	for (let x = 0; x < 4; x++) {
		let num = output.choices[x];
		output.names.push(users[num]);
	};

	setTimeout( () => { 
		T.get("search/tweets", { q: query, count: 1 }, function(err, data, response) {
			if (data.statuses[0]) {
				output.tweet = data.statuses[0];
				res.send(output);
			}
			else {
				res.send(false);
			}
		});
 	}, Math.floor(Math.random() * 100) + 150);
});

/* Starting express server */
app.listen(app.get("Port"), () => {
	console.log("Server started on port " + app.get("Port") + ". Press ctrl-c to quit.");
});

