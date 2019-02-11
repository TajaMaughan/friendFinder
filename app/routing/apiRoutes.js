var friends = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    })

    app.post("/api/friends", function (req, res) {
        var userInput = req.body;
        var userScores = userInput.scores;
        var totalDifference = 0;
        for (var i = 0; i < friends.length; i++) {
            totalDifference = 0;
            for (var j = 0; j < friends[i].scores.length; j++) {
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
                console.log("This is the " + (j + 1 ) + " score for friend " + (i + 1))
                console.log(totalDifference + " this is the difference so far");
            }
        }
        friends.push(userInput);
    })
}
