const expect = require('expect');
var {generateMessage} = require('./message');


describe('generateMessage', () => {

  it('should generate the correct message object', () => {

    // Store result in a variable

    var from = 'Martin';

    var text = 'Test message';

    var message = generateMessage(from, text);
    
    expect(message).toInclude({from, text});

    expect(message.createdAt).toBeA('number');

  });

});
