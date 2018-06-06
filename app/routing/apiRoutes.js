
var friendList = require("../data/friends");


module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendList);
  });


  app.post("/api/friends", function(req, res) {
    var userData 	= req.body;
    var userName 	= userData.name;
    var userPhoto 	= userData.photo;
    var userScores 	= userData.scores;
  

    var bestFriend = {
        name: "",
        photo: "",
        scores: 1000
  };

 

  var totalDifference = [];


  for  (var i=0; i< friends.length; i++) {

    console.log(friends[i].name);
    totalDifference = 0;


    for (var j=0; j< friends[i].scores[j]; j++){

      totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

      if (totalDifference <= bestFriend.totalDifference){

        bestFriend.name = friends[i].name;
        bestFriend.photo = friends[i].photo;
        bestFriend.friendDifference = totalDifference;
      }
    }
  }
	friendList.push(userData);
 
    res.json(bestFriend);
  });
	};
