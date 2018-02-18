var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = 'Adi';
    var text = 'Some new message';
    var message = generateMessage(from, text);

    //Below are the assertions of the message we get above
    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text}); //using ES6 syntax
  });
});
