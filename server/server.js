const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);
//console.log(publicPath);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user is connected');

  socket.emit('newEmail', {
    from: 'adi@gmail.com',
    text: 'Hey how are you?',
    createAt: 1234
  });

  socket.emit('newMessage', {
    from: 'Michael', 
    text: 'Hi how are you brother',
    createdAt: 142412424
  } );
  // //Listener(email app)
  // socket.on('createEmail', (newEmail) => {
  //   console.log('createEmail', newEmail);
  // });

  //Listener(chat app)
  socket.on('createMessage', (message) => {
    console.log('createMessage', message);
  });
  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });

  //Custom events

});

server.listen(port, () => {
  console.log(`Server is running on port ${port} `);
});
