var friendsData = require('../data/friends.js');
var path = require('path');


module.exports = function(app) {

	app.get('/api/friends', function(req,res) {
		res.json(friendsData);
	})



	app.post('/api/friends', function(req,res) {
		//console.log(friendsData.length);
		var newScores = [];

		for (var i = 0; i<req.body.scores.length; i++) {
			newScores.push(parseInt(req.body.scores[i]));	
		}

		var differences = 0;
		var totDiff =[];
		for (var j=0; j < 5; j++) {
			for(var i=0; i < 10; i++) {
				
				differences = differences + Math.abs(parseInt(friendsData[j].scores[i]) - parseInt(newScores[i]));

			}

			totDiff.push(differences);
			console.log(totDiff);	
			differences = 0;
		}
	
		var lowest = 0;
		for (var i=0; i<totDiff.length; i++) {
			if (totDiff[i] < totDiff[lowest]) {
				lowest = i;
			}
			
		}
		console.log(totDiff[lowest]);
		console.log("You matched with: " + friendsData[lowest].name + "!");
		res.json(friendsData[lowest]);
		res.json("hello");

	})
}

