const longestSubstringWithoutRepeatingChars = (s) => {
  let maxSize = 1;
  let currentString = s.charAt(0);
  if (!currentString) maxSize = 0;
  let endOfLastString;
  for (let i = 1; i < s.length; i += 1) {
    if (currentString.includes(s.charAt(i))) {
      maxSize = Math.max(currentString.length, maxSize);
      endOfLastString = i;
      currentString = currentString.substr(
        currentString.lastIndexOf(s.charAt(i)) + 1,
      ) + s.charAt(i);
    } else {
      currentString += s.charAt(i);
      maxSize = Math.max(maxSize, currentString.length);
    }
  }
  return endOfLastString ? maxSize : s.length;
};

longestSubstringWithoutRepeatingChars.runtime = 89.40;
longestSubstringWithoutRepeatingChars.memory = 41.25;
longestSubstringWithoutRepeatingChars.problemURL = 'https://leetcode.com/problems/longest-substring-without-repeating-characters/';
longestSubstringWithoutRepeatingChars.dateCompleted = new Date('06/04/2018');

module.exports = longestSubstringWithoutRepeatingChars;
