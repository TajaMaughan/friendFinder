var friends = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    })

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
                difference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
            }
            if(difference <= friendMatch.friendScore) {
                friendMatch.friendName = friends[i].name;
                friendMatch.friendImg = friends[i].img;
                friendMatch.friendScore = difference;
            }
        }
        console.log(friendMatch);
        friends.push(userInput);
        res.json(friendMatch);
    })
}
