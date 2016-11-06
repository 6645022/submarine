'use strict';
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');
let pickArr = [];

app.use(express.static(path.join(__dirname, '../')));
io.on('connection', (socket) => {
	pickArr = [];
	socket.on('picking', (id) => {
		pickArr.push(id);
		console.log(pickArr);
	});

	socket.on('guess', (id) => {
		console.log(pickArr.indexOf(id));
		console.log(pickArr);
		if( pickArr.indexOf(id) > -1 ){
			console.log('exist');
			socket.emit('isSubmarine', id);
			socket.broadcast.emit('isSubmarine', id);
		};
		
	});

});

http.listen('3000', (err) => {
	if(!err){
		console.log('connected');
	}
});