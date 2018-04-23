// Dependencies
// =============================================================
// var express = require("express");
// var bodyParser = require("body-parser");
// var path = require("path");

var friendsData = require('../data/friends');


// Routes
// =============================================================

module.exports = function (app) {

	var data = [];

// Basic route that sends the user first to the AJAX Page
app.get("/api/friends", function(req, res) {
  res.json(friendsData);
});

// var data = {
// 	name: "",
// 	photo: "",
// 	total: 100
// };


// var difference = 0;


app.post("/api/friends", function(req, res) {
 
	data = [];
	var difference = 0;
	var userScore = req.body.scop

friendsData.forEach(function(friend) {

	var newDiff = 0;

	for (var i = 0; i < friend.scores.length; i++){

		if(parseInt(req.body.scores[i]) != parseInt(friend.scores[i])){
			 newDiff += Math.abs(parseInt(req.body.scores[i])+parseInt(friend.scores[i]));

	}
}






// 	}

// var friendInput = req.body;

// for (i = 0; i < friendsData.length; i++) {

// 	difference = 0;

// 	for (x = 0; x < 9; x++) {

// 		difference = difference + Math.abs(friendsData[i].scores[x]-friendInput.scores[x]);
// 	}

// 	if (difference<data.total) {
// 		data.total = difference;
// 		data.name = friendsData[i].name;
// 		data.photo = friendsData[i].photo;


	if(newDiff < difference) {

		data = friendsData;

		difference = newDiff;

	} else if(difference === 0) {

		data = friend;

		difference = newDiff;
	}

});


 friendsData.push(req.body);




// 	}
	
// }

res.json(data);

console.log("Data from apiRoutes is:" + data);

});

};