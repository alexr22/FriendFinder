var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');

var app = express();
var PORT = process.env;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);

// app.get('/', function(req, res) {
// 	res.sendFile(path.join(__dirname, 'app/public/home.html'));
// })


// app.get('/api/friends', function(req, res){
	
// 	for(var i=0; i<users.length; i++){

// 	res.json(users);
	
// 	}
	
// })

// app.post('api/new', function(req, res){
// 	var newUser1 = req.body;
// 	console.log(newUser1);

// 	users.push(newUser1);
// 	res.json(newUser1);
// })
// app.get('/survey', function(req, res) {
// 	res.sendFile(path.join(__dirname, 'app/public/survey.html'));
// })


app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
});