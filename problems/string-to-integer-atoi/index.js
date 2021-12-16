const DIGITS = new Set(new Array(10).fill('').map((_, i) => i.toString()));
const PROCEEDING_CHARACTERS = new Set(['+', '-', ' ']);
const VALID_ATOI_CHARACTERS = new Set([...PROCEEDING_CHARACTERS, ...DIGITS]);
const MINIMUM_VALUE = (-2) ** 31;
const MAXIMUM_VALUE = 2 ** 31 - 1;
// It feels wrong to use parseInt to do the string conversion to number
// but let's start there
const stringToIntegerATOI = (str) => {
  let num = '';
  for (let i = 0; i < str.length; i += 1) {
    const char = str.charAt(i);
    // Break if we've started the number and encounter a non-digit
    if (!VALID_ATOI_CHARACTERS.has(char) || (num && !DIGITS.has(char))) {
      break;
    }
    if (!num && char === ' ') {
      // Do nothing
    } else {
      // If we're establishing the first number encountered
      // We should check if it's a +/-, but also ensure the next
      // character is a digit
      if (!num && PROCEEDING_CHARACTERS.has(char)) {
        num += char;
      }
      if (DIGITS.has(char)) {
        num += char;
      }
    }
  }
  if (num < MINIMUM_VALUE) {
    return MINIMUM_VALUE;
  } if (num > MAXIMUM_VALUE) {
    return MAXIMUM_VALUE;
  } if (!num) {
    return 0;
  }
  const result = parseInt(num, 10);
  return Number.isNaN(result) ? 0 : result;
};
stringToIntegerATOI.runtime = 24.59;
stringToIntegerATOI.memory = 51.44;
stringToIntegerATOI.problemURL = 'https://leetcode.com/problems/string-to-integer-atoi/';
stringToIntegerATOI.dateCompleted = new Date('12/16/2021');

module.exports = stringToIntegerATOI;
