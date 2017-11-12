var express = require('express');
var path = require('path');
var events = require('./eventsController.js');
var app = express();
var rootPath = path.normalize(__dirname + '/../');
var bodyParser = require('body-parser');

app.use(express.static(rootPath + '/app'));
app.use(bodyParser.json());

app.get('/data/event/:id', events.get);
app.get('/data/event/', events.getAll);
app.post('/data/event/:id', events.save);

//will need to add this fallback if the routes above are not hit (need this for $locationProvider.html5Mode )
app.get('*', function(req, res) { res.sendFile(rootPath + '/app/index.html'); });

app.listen(8090);
console.log('listening to port 8000');