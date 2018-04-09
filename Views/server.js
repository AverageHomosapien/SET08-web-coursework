var fs = require('fs');
var connect = require('connect');
// Serve static old command
//var serveStatic = require('serve-static');
var express = require ('express');
var app = express () ;
var path = require('path');

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies
app.use(express.static(__dirname + '/views'));
//app.set('views', './views');
//app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get ('/', function(req, res ) {
res.render('pages/index.ejs');
});

app.get ('/userpage', function(req, res ) {

var user =   JSON.parse(fs.readFileSync(__dirname+'/views/user_data/profile_data.json', 'utf8'));
console.log(user);

res.render('pages/userpage.ejs', {details: user});
});

app.get ('/edit_userpage', function(req, res ) {
res.render('pages/edit_userpage.ejs');
});

app.get ('/new_post', function(req, res ) {
res.render('pages/new_post.ejs');
});

var server = app.listen (8080,"127.0.0.1",function () {
var host = server.address ().address
var port = server.address ().port


console.log (" Listening on http://%s:%s", host , port )
})


/*
const script = require('./js/stdjavascript');

// To be called with the parameter jsonData to save
// Also in another branch with the serverside request directly handled..
//  ..with the client side having issues
function addLogin(jsonData){
  fs.appendFile('user_data/logins.json', jsonData, function(err){
  	if (err) throw err;
  	console.log('Saved!');
  });
}

// loops through all the json data to check if it's there
// Should call when page is loaded to check if the user is logged in and redirect
function checkLogin(){
  if (loggedIn != true){
    window.location.replace("index.html");
  }
}


/*
// need to make a new file when a new person is mae
function updateBlog(){
  var filePath = path.join('user_data/', userId);
  filePath = path.join(filePath, '.json');
  fs.appendFile(filePath, jsonData, function(err)){
    if (err) throw err;
    console.log('Saved into file');
  });
}
*/
