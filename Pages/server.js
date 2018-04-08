var fs = require('fs');
var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8080, function(){
    console.log('Server running on 8080...');
});
var loggedIn = false;
const script = require('./js/stdjavascript');



function addLogin(jsonData){
  fs.appendFile('user_data/logins.json', jsonData, function(err){
  	if (err) throw err;
  	console.log('Saved!');
  });
}

// loops through all the json data to check if it's there
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
