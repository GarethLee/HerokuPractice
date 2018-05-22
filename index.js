var express = require("express");
var app = express();
var path = require('path');

var HTTP_PORT = process.env.PORT || 8080;

// call this function after the http server starts listening for requests
function onHttpStart() {
  console.log("Express http server listening on: " + HTTP_PORT);
}

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// setup a 'route' to listen on the default url path (http://localhost)
app.get("/", function(req,res){
   res.send("Hello World<br /><a href='/about'>Go to the about page</a>");
});

// setup another route to listen on /about
app.get("/about", function(req,res){
  // Don't use it 
  //res.sendFile(path.join(__dirname, "/views/about.ejs"));

  // ejs render automatically looks in the views folder
   res.render('about');
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT, onHttpStart);