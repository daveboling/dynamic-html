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

app.get('/add/:x/:y/:z/:n', function(req, res){
	req.params.x *= 1;
	req.params.y *= 1;
	req.params.z *= 1;
	req.params.n *= 1;
	req.params.fontsize   = req.query.fontsize;
	req.params.color	  = req.query.color;
	req.params.borderwidth= req.query.borderwidth;
	res.render('sum', req.params);

});

app.get('/sumlist/:list', function(req, res){
	var sum = 0;
	req.params.list = req.params.list.split(',');
	//Kind of like an inline for loop that will run through an array and do something.
	var list = req.params.list.map(function(x){return x * 1;});

	//Calculate the sum
	for(var i = 0; i < list.length; i++){
		sum += list[i]
	}

	req.params.even = req.query.even;
	req.params.odd  = req.query.odd;
	//req.params.list.push(sum);
	req.params.sum  = sum;
	res.render('sumlist', req.params);
});

app.get('/rolldice/:rolls', function(req, res){
	res.render('rolldice', req.params);
});



app.listen(process.env.PORT, function() {
	console.log('Express.js is listening on port 3000...');
});