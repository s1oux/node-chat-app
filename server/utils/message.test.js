var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'andrew';
    var text = 'some text';
    var result = generateMessage(from, text);
    expect(result).toMatchObject({from, text});
    expect(typeof result.createdAt).toBe('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'andrew';
    var lat = 1;
    var lng = 1;
    var url = `https://google.com/maps?q=${lat},${lng}`
    var result = generateLocationMessage(from, lat, lng);
    expect(result).toMatchObject({from, url});
    expect(typeof result.createdAt).toBe('number');
  })
});
