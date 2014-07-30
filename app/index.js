'use strict';

var express = require('express');
var app     = express();
var morgan  = require('morgan');


//Adding EJS to project
//__dirname is a node.js variable
app.set('views', __dirname + '/views'); //setting directory for EJS to use
app.set('view engine', 'ejs'); //Start up EJS

//Morgan useful for seeing HTTP error codes
app.use(morgan('dev'));

//Must be done after EJS or else path will be messed up
app.use(express.static(__dirname + '/static'));

//Get takes two things
//1: The path, 2: A callback function with two parameters: 
//-------------Request and Response
app.get('/', function(req, res){
	res.render('checkers'); //extension is mentioned on line 11
});

app.listen(process.env.PORT, function() {
	console.log('Express.js is listening on port 3000...');
});