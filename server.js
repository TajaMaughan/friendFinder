var express = require("express");
var app = express();
//sets port
var PORT = process.env.PORT || 8000;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//requires routing files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//let you know server is working and give a link to the localhost
app.listen(PORT, function() {
    console.log("App listening at http://localhost:" + PORT);
  });