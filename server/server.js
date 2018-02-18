const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);
//console.log(publicPath);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user is connected');

  //for new connection(user joined)
  //socket.emit from Admin text Welcome to chat room(to the new user)
  socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat room'));
  //socket.broadcast.emit from Admin text new user has joined(to everyone else in the chat room)
  socket.broadcast.emit('newMessage',generateMessage('Admin', 'New user has joined'));
  //Listener(chat app)
  socket.on('createMessage', (message) => {
    console.log('createMessage', message);

    io.emit('newMessage', generateMessage(message.from, message.text));
    // socket.broadcast.emit('newMessage', {
    //   from:  message.from,
    //   text: message.text,
    //   createdAt: new Date().getTime()
    // });

  });

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });

});

server.listen(port, () => {
  console.log(`Server is running on port ${port} `);
});
