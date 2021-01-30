var express = require("express");
var session = require("express-session");
var passport = require("./config/passport");
var app = express();
var PORT = process.env.PORT || 8080;
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({ secret: "keyboard cat", resave: true, savedUnitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Static directory
app.use(express.static("public"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
// =============================================================
require("./controllers/user-controller.js")(app);
require("./routes/html-routes.js")(app);
require("./controllers/user-controller.js")(app);
require("./controllers/patients-controller.js")(app);
require("./controllers/services-controller.js")(app);
require("./controllers/appointment-controller.js")(app);



// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
