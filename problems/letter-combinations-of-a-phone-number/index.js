const KEY_MAP = {
  0: [' '],
  1: [],
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
};
const letterCombinationOfAPhoneNumber = (str) => {
  if (!str || /^1+$/.test(str)) {
    return [];
  }
  if (str.length === 1) {
    return KEY_MAP[str];
  }
  const result = [];
  const recurse = (index, currentString) => {
    if (index === str.length) {
      result.push(currentString);
      return;
    }
    KEY_MAP[str[index]].forEach((character) => {
      recurse(index + 1, currentString + character);
    });
  };
  recurse(0, '');
  return result;
};
letterCombinationOfAPhoneNumber.runtime = 71.78;
letterCombinationOfAPhoneNumber.memory = 24.63;
letterCombinationOfAPhoneNumber.problemURL = 'https://leetcode.com/problems/letter-combinations-of-a-phone-number/';
letterCombinationOfAPhoneNumber.dateCompleted = new Date('12/22/2021');

module.exports = letterCombinationOfAPhoneNumber;
