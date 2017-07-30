const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {

  // should reject non-string values (number)

  it('should reject non string values', () => {

    var validated = isRealString(123);

    expect(validated).toBe(false);

  });

  // should reject strings with only spaces

  it('should reject strings with only spaces', () => {

    var validated = isRealString('   ');

    expect(validated).toBe(false);

  });

  // should allow strings with non-space characters

  it('shold allow strings with non-space characters', () => {

    var validated = isRealString('test 1');

    expect(validated).toBe(true);

  });

});
