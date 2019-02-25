var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'andrew';
    var text = 'some text';
    var result = generateMessage(from, text);
    expect(result).toMatchObject({from, text});
    expect(typeof result.createdAt).toBe('number');
  });
});
