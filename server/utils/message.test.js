const expect = require('expect');
var {generateMessage} = require('./message');
var {generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {

  it('should generate correct location object', () => {

    var from = 'Martin';

    var latitude = 1;
    var longitude = 1;

    var url = 'https://www.google.com/maps?q=1,1';

    var locationMessage = generateLocationMessage(from, latitude, longitude);

    expect(locationMessage).toInclude({from, url});
    expect(locationMessage.createdAt).toBeA('number');

  });

});
