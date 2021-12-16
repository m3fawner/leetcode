const longestSubstringWithoutRepeatingChars = require('.');

describe(longestSubstringWithoutRepeatingChars, () => {
  it.each([
    ['abcabcbb', 3],
    ['bbbbbb', 1],
    ['pwwkew', 3],
    ['', 0],
  ])('for input %s it should produce a length of %d', (input, expectation) => {
    expect(longestSubstringWithoutRepeatingChars(input)).toEqual(expectation);
  });
});
