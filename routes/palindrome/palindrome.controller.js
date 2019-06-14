const { isPalindrome } = require('./palindrome.helper');

exports.check = ({ query }, res, next) => {
  let { string, permutation = 'false' } = query;

  // Check for required string, and throw an error if it is absent.
  if (!string) {
    const err = new Error(`A query parameter of 'string' is required to evaluate for a palindrome`);
    err.statusCode = 400;
    return next(err);
  };

  // Attempt to parse the permutation query parameter to a boolean
  try {
    permutation = JSON.parse(permutation);
  } catch (e) {
    permutation = false;
  }

  // Get the result from helper function
  const result = isPalindrome(string, permutation);

  // Return response
  return res.status(200).send({ request: { string, permutation }, result });
};
