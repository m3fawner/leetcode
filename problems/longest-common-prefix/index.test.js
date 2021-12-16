const longestCommonPrefix = require('.');

describe(longestCommonPrefix, () => {
  it.each([
    [['flower', 'flow', 'flight'], 'fl'],
    [['dog', 'racecar', 'car'], ''],
    [[], ''],
  ])('for input array %s produces %s', (input, expectation) => {
    expect(longestCommonPrefix(input)).toEqual(expectation);
  });
});
