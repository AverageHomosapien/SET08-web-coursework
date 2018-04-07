var http = require('http');
var fs = require('fs');
var loggedIn = false;

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
}).listen(8080);

fs.appendFile('user_data/logins.txt', jsonData, function(err){
	if (err) throw err;
	console.log('Saved!');
});
