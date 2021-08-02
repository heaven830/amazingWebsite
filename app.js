'use strict';

const express = require('express');
const socketIO = require('socket.io');
var bodyParser = require('body-parser');
const path = require('path');

const PORT = process.env.PORT || 3000;
const INDEX = '/loginPage.html';

const server = express()
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended: false}))
  .use('/', express.static(path.join(__dirname,'website 1'))) 
  .post('/sendmessage', (req, res) => {
      latestMessage = req.body;
      console.log(req.body);
      io.emit('message', req.body); 
    res.end();
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));


var latestMessage = "";

const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('Client connected');
  socket.on('disconnect', () => console.log('Client disconnected'));
});

