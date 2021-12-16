const isPalindrome = (s) => {
  for (let i = 0; i < s.length / 2; i += 1) {
    if (s[i] !== s[s.length - i - 1]) {
      return false;
    }
  }
  return true;
};
const longestPalindromicSubstring = (s) => {
  if (isPalindrome(s)) return s;
  let currentMax;
  for (let i = 0; i < s.length; i += 1) {
    const currentCharacter = s.charAt(i);
    let remaining = s.substr(i);
    let lastCurrentCharacter;
    do {
      lastCurrentCharacter = remaining.lastIndexOf(currentCharacter);
      remaining = remaining.substring(0, lastCurrentCharacter + 1);
      if (isPalindrome(remaining)) {
        currentMax = currentMax && (currentMax.length > remaining.length) ? currentMax : remaining;
        break;
      } else {
        remaining = remaining.substring(0, lastCurrentCharacter);
      }
    } while (lastCurrentCharacter > 0);
  }
  return currentMax;
};

longestPalindromicSubstring.runtime = 30.81;
longestPalindromicSubstring.memory = 45.49;
longestPalindromicSubstring.dateCompleted = new Date('06/04/2018');
longestPalindromicSubstring.problemURL = 'https://leetcode.com/problems/longest-palindromic-substring/';

module.exports = longestPalindromicSubstring;
