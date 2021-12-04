const express = require('express');
const app = express();
const http = require('http');
const { isObject } = require('util');
const expressServer = http.createServer(app);

//  -------> Create socket.io server
const {Server} = require("socket.io");
let io = new Server(expressServer);


io.on('connection', function(socket){
    socket.join('kitchen-room');
    io.sockets.in('kitchen-room').emit('cooking', "Fried Rice Cooking!")

    socket.join('bed-room');
    io.sockets.in('bed-room').emit('rest', "Taking rest to prepared for next!")
})



// ----------> client connected to server
app.get('/', function(req, res){
    res.sendFile(__dirname+"/index.html");
})

// ----------> fixed the app running port
expressServer.listen(3000, function(){
    console.log("Server run @3000");
})