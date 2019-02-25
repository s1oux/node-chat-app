const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('new user connected');

  socket.emit('newMessage',
            generateMessage('ODMEN', 'NU DAROVA V KHATE'));

  socket.broadcast.emit('newMessage',
            generateMessage('ODMEN', 'LOVI NOVOGO MOLODOGO'));

  socket.on('createMessage', (message, callback) => {
    console.log('createMessage', message);

    io.emit('newMessage',
              generateMessage(message.from, message.text));

    callback('from server aye');
    // socket.broadcast.emit('newMessage', {
    //   from: message.from,
    //   text: message.text,
    //   createdAt: new Date().getTime()
    // });
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(port, () => {
  console.log(`server is up on port ${port}`);
});
