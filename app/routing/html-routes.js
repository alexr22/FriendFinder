// app.get('/survey', function(req, res) {
// 	res.sendFile(path.join(__dirname, 'survey.html'));
// })

// $("#goSurvey").on("click", function(req, res){

// 	res.sendFile(path.join(__dirname, 'app/public/survey.html'));
// })


var path = require('path');

module.exports = function(app){

	app.get('/survey', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/survey.html'))
	})

	app.use(function(req, res){
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});

}