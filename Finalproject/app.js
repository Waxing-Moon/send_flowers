var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(express.static(__dirname + '/static/'));

var server = app.listen('9090', function(){
	//console.log('running on port 9090 now');
	console.log('Server listening at http://' + server.address().address + ':' + server.address().port);
});
