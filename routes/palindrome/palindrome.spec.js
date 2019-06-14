const { isPalindrome } = require('./palindrome.helper');
const { check } = require('./palindrome.controller');

describe('/palindrome', function () {
  it('should return a 200 if the required parameters are provided', function () {
    const mockReq = { query: { string: 'civic' } };
    const mockRes = {
      status: jest.fn(status => ({
        send: jest.fn(resObj => ({ res: { ...resObj, statusCode: status }
        }))
      }))
    };

    expect(check(mockReq, mockRes).res).toEqual({ 'request': { 'string': 'civic', 'permutation': false }, 'result': true, 'statusCode': 200 });
  });

  it('should return a 400 if the required parameters are not provided', function () {
    const mockReq = { query: {} };
    const mockRes = {};
    const mockNext = jest.fn();

    check(mockReq, mockRes, mockNext);
    expect(mockNext).toHaveBeenCalledTimes(1);
    expect(mockNext).toHaveBeenCalledWith(new Error(`A query parameter of 'string' is required to evaluate for a palindrome`));
  });
});

describe('Normal palindrome', function () {
  it('helper should evaluate a palindrome string to be true', function () {
    const palindrome = isPalindrome('civic', false);
    expect(palindrome).toBe(true);
  });

  it('helper should evaluate a non palindrome string to be false', function () {
    const notPalindrome = isPalindrome('viicc', false);
    expect(notPalindrome).toBe(false);
  });
});

describe('Permutation palindrome', function () {
  it('helper should evaluate a permutation of a palindrome string to be true', function () {
    const palindrome = isPalindrome('viicc', true);
    expect(palindrome).toBe(true);
  });

  it('helper should evaluate a non permutation palindrome string to be false', function () {
    const notPalindrome = isPalindrome('viiccc', true);
    expect(notPalindrome).toBe(false);
  });
});
