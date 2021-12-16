// https://leetcode.com/problems/consecutive-characters/

const consecutiveCharacters = (s) => {
  let currentLetter = s[0];
  let currentSize = 0;
  let maxSize = 0;
  for (let i = 0; i <= s.length; i += 1) {
    if (currentLetter === s[i]) {
      currentSize += 1;
    } else {
      maxSize = Math.max(maxSize, currentSize);
      if (s.length - maxSize > 0) {
        currentLetter = s[i];
        currentSize = 1;
      } else {
        break;
      }
    }
  }
  return maxSize;
};
consecutiveCharacters.runtime = 94.81;
consecutiveCharacters.memory = 51.76;
module.exports = consecutiveCharacters;
