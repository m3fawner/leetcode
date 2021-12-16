const longestPalindromicSubstring = require('.');

describe(longestPalindromicSubstring, () => {
  it.each([
    ['babad', 'aba'],
    ['cbbd', 'bb'],
    ['a', 'a'],
    ['ac', 'c'],
    ['aacabdkacaa', 'aca'],
  ])('for %s it should produce %s', (input, expectation) => {
    expect(longestPalindromicSubstring(input)).toEqual(expectation);
  });
});
