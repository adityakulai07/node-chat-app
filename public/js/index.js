var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');
});

socket.on('disconnect', function () {
  console.log('Disconnected from the server');
});

socket.on('newMessage', function (message) {
  console.log('New message', message);
});


// socket.on('newEmail', function (email) {
//   console.log('New email', email); //Listener of data from server
// });
