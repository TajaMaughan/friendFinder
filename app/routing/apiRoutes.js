//imports the friends array for use.
var friends = require("../data/friends.js");
module.exports = function (app) {
    //displays the frinds array
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    })
    //after the post is triggered from the survey the friends array is cycled through to determine the best match
    app.post("/api/friends", function (req, res) {
        var friendMatch = {
            friendName: "",
            friendImg: "",
            friendScore: 100
        }
        var userInput = req.body;
        var userScores = userInput.scores;
        var difference = 0;
        for (var i = 0; i < friends.length; i++) {
            difference = 0;
            for (var j = 0; j < friends[i].scores.length; j++) {
                //adds the difference between each answer from the user and each friend in the array.
                difference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
            }
            //the person from the friends array with the lowest difference is going to be matche as friend
            if(difference <= friendMatch.friendScore) {
                friendMatch.friendName = friends[i].name;
                friendMatch.friendImg = friends[i].img;
                friendMatch.friendScore = difference;
            }
        }
        console.log(friendMatch);
        //pushes the user input to the array to be used the next time some takes the survey
        friends.push(userInput);
        //returns the best match to the front end.
        res.json(friendMatch);
    })
}
