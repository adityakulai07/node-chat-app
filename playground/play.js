//from server.js
socket.emit('newEmail', {
  from: 'adi@gmail.com',
  text: 'Hey how are you?',
  createAt: 1234
});
//THis is just for one user
socket.emit('newMessage', {
  from: 'Michael',
  text: 'Hi how are you brother',
  createdAt: 142412424
} );
//Listener(email app)
socket.on('createEmail', (newEmail) => {
  console.log('createEmail', newEmail);
});

//from index.js
socket.emit('createMessage', {
  from: 'Adi',
  text: 'Hi guys are you ready for the trip?'
});

//Emit data from client to server when creating and sending an email
// socket.emit('createEmail', {
//   to: 'anu@yahoo.com',
//   text: 'Hi, this is adi'
// });
