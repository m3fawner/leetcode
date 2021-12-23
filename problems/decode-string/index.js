const getIndexOfClosingBracket = (str) => {
  let openBrackets = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === '[') {
      openBrackets += 1;
    } else if (str[i] === ']') {
      openBrackets -= 1;
    }
    if (openBrackets === -1) {
      return i;
    }
  }
  // Only happens in an invalid input, which is guaranteed by the problem not to occur
  // but for the sake of eslint I'll do it :)
  return -1;
};
const decodeString = (str) => {
  let result = '';
  if (/^[a-z]*$/i.test(str)) {
    return str;
  }
  for (let i = 0; i < str.length; i += 1) {
    const char = str[i];
    if (/\d/.test(char)) {
      let number = char;
      let nextChar = str[i + 1];
      while (/\d/.test(nextChar)) {
        number += nextChar;
        i += 1;
        nextChar = str[i + 1];
      }
      const count = parseInt(number, 10);
      const repeated = str.slice(i + 2); // start inside bracket
      const nextClosingBracket = repeated.indexOf(']');
      const nextOpeningBracket = repeated.indexOf('[');
      if (nextOpeningBracket !== -1 && nextOpeningBracket < nextClosingBracket) {
        const indexOfClosingBracket = getIndexOfClosingBracket(repeated);
        if (indexOfClosingBracket === -1) {
          throw new Error('Invalid input string, has a mismatch of closing brackets');
        }
        const nestedRepeating = repeated.slice(0, indexOfClosingBracket);
        result += decodeString(nestedRepeating).repeat(count);
        i += indexOfClosingBracket + 2;
      } else {
        result += repeated.slice(0, nextClosingBracket).repeat(count);
        i += nextClosingBracket + 2;
      }
    } else {
      result += char;
    }
  }
  return result;
};
decodeString.runtime = 69.04;
decodeString.memory = 51.68;
decodeString.problemURL = 'https://leetcode.com/problems/decode-string/';
decodeString.dateCompleted = new Date('12/23/2021');

module.exports = decodeString;
