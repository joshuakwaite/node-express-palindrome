exports.isPalindrome = (string, permutation) => {
  return permutation ? isPermutationPalindrome(string) : isNormalPalindrome(string);
};

// Check for normal Palindrome
const isNormalPalindrome = (string) => {
  return string === string.split('').reverse().join('');
};

// Check if any permutation of the string is palindrome
const isPermutationPalindrome = (string) => {
  const unpairedChars = new Set();

  for (let char of string) {
    unpairedChars.has(char) ? unpairedChars.delete(char) : unpairedChars.add(char);
  }

  return unpairedChars.size <= 1;
};
