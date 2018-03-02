var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    //send the below to the function
    var from = 'Adi';
    var text = 'Some new message';
    var message = generateMessage(from, text);

    //Below are the assertions of the message we get above
    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text}); //using ES6 syntax
  });
});

describe('generateLocationMessage', () => {
  it('should generate the correct location object', () => {
    //send the below to the function
    var from = 'Aditya';
    var latitude = 15;
    var longitude = 20;
    var url = 'https://www.google.com/maps?q=15,20';
    var message = generateLocationMessage(from, latitude, longitude);
    //assertions
    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, url});
  });
});
