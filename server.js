/**
 * Created by Dood on 02/12/2016.
 */
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var cors = require('cors');

var app = express();
app.use('/app',express.static(__dirname + '/app'));
app.use('/node_modules',express.static(__dirname + '/node_modules'));
app.use('/icons',express.static(__dirname + '/icons'));
app.use('/styles',express.static(__dirname + '/styles'));
app.use('/bower_components',express.static(__dirname + '/bower_components'));
app.use(bodyParser.json());
app.use(cors());

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});

//On affiche l'index par défaut
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});