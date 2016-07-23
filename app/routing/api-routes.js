var friendsData = require('../data/friends.js');
var path = require('path');

module.exports = function(app) {

	app.get('/api/friends', function(req,res) {
		res.json(friendsData);
	})



	app.post('/api/friends', function(req,res) {
		console.log(friendsData);
		var newScores = [];

		for (var i = 0; i<req.body.scores.length; i++) {

			newScores.push(parseInt(req.body.scores[i]));
		
		}
				console.log(newScores);
		for(var i=0; i < newScores.length; i++) {
			var differences = [];
			differences.push(Math.abs(newScores[i] - friendsData.scores[i]));
			console.log(differences);
		}
	})
}