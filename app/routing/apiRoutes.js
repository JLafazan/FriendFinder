// Dependencies
// =============================================================
// var express = require("express");
// var bodyParser = require("body-parser");
// var path = require("path");

var friendsData = require('../data/friends');

    

// Routes
// =============================================================

module.exports = function (app) {

	;
// Basic route that sends the user first to the AJAX Page
app.get("/api/friends", function(req, res) {
  res.json(friendsData);
});

     

app.post("/api/friends", function(req, res) {
    
        friendsData.push(req.body);
        res.json(true);

    

    // res.json(friendsData);
    // matchingData = [];
    // var userScores = req.body.scores.map(function(num){
    // 	return parseInt(num);
    
   


//   //  import submitted array of form inputs
    var friendInput = req.body;
    //   //  compare form input array to all the friend arrays in friends.js
    // for (i = 0; i < friendsData.length; i++) {
    //   //    do a difference on each score entered
    //   difference = 0;

    //   for (x = 0; x < 9; x++); {
    //     difference = difference + Math.abs(friendsData[i].scores[x] - friendInput.scores[x]);

    //   }
    //       //   //    total up differences - smallest total difference is the match
    // //   //  export match name and picture to html modal 
    //   if (difference < bestMatch.total) {
    //     bestMatch.total = difference;
    //     bestMatch.name = friendsData[i].name;
    //     bestMatch.photo = friendsData[i].photo;
    //   }

    // }
    // res.json(bestMatch);
    // console.log("bestMatch from apiRoutes.js is:  "  + bestMatch);
  
});



//     var valueDiffereneArray = [];
//     var userScores = req.body.scores; 

//     for( var i=0;friendsProfiles.length >i;i++){
//         var selectedFriendScores = friendsProfiles[i].scores; 
//         var totalDiff =0;
//         for( var j=0;selectedFriendScores.length >j; j++){
//             totalDiff = totalDiff+ parseInt(Math.abs(userScores[j]-selectedFriendScores[j]));
//         }
//         valueDiffereneArray.push(totalDiff);

//     }
//     console.log(valueDiffereneArray);
//     console.log('smallest value -->'+Math.min.apply(Math,valueDiffereneArray));

//      var leastDifference = Math.min.apply(Math,valueDiffereneArray);
     
//      //get the matching friend details 
//      var matchingData = friendsProfiles[valueDiffereneArray.indexOf(leastDifference)];

    


// data = matchingData

// res.json(data);

// console.log("Data from apiRoutes is:" + data);


};