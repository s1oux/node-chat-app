var socket = io();

socket.on('connect', function () {
  console.log('connected to server');
  
  socket.emit('createMessage', {
    from: 'drew@example.com',
    text: 'lmao'
  });
});

socket.on('disconnect', function () {
  console.log('disconnected from server');
});

socket.on('newMessage', function (message) {
  console.log('got new message', message);
});
