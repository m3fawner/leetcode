const letterCombinationOfAPhoneNumber = require('.');

const sortArray = (input) => input.sort((a, b) => {
  for (let i = 0; i < a.length; i += 1) {
    if (a.charCodeAt(i) > b.charCodeAt(i)) {
      return 1;
    } if (a.charCodeAt(i) < b.charCodeAt(i)) {
      return -1;
    }
  }
  return 0;
});
describe(letterCombinationOfAPhoneNumber, () => {
  it.each([
    ['', []],
    ['92', ['wa', 'wb', 'wc', 'xa', 'xb', 'xc', 'ya', 'yb', 'yc', 'za', 'zb', 'zc']],
    ['23', ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']],
    ['03', [' d', ' e', ' f']],
    ['0', [' ']],
    ['1', []],
    ['11111111', []],
    ['2', ['a', 'b', 'c']],
    ['3', ['d', 'e', 'f']],
    ['4', ['g', 'h', 'i']],
    ['5', ['j', 'k', 'l']],
    ['6', ['m', 'n', 'o']],
    ['7', ['p', 'q', 'r', 's']],
    ['8', ['t', 'u', 'v']],
    ['9', ['w', 'x', 'y', 'z']],
    ['234', ['adg', 'adh', 'adi', 'aeg', 'aeh', 'aei', 'afg', 'afh', 'afi', 'bdg', 'bdh', 'bdi', 'beg', 'beh', 'bei', 'bfg', 'bfh', 'bfi', 'cdg', 'cdh', 'cdi', 'ceg', 'ceh', 'cei', 'cfg', 'cfh', 'cfi']],
  ])('for input %s produce output %s', (input, expectation) => {
    expect(sortArray(letterCombinationOfAPhoneNumber(input))).toEqual(sortArray(expectation));
  });
});
