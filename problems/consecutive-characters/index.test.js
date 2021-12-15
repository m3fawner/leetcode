const maxPower = require('.');

// Runtime beat 94.81% of JS submissions
// Memory usage 51.76%
describe(maxPower, () => {
  it.each([
    ['leetcode', 2],
    ['abbcccddddeeeeedcba', 5],
    ['triplepillooooow', 5],
    ['hooraaaaaaaaaaay', 11],
    ['tourist', 1],
    ['eeee', 4],
  ])('for input %s it should return %d', (i, expectation) => {
    expect(maxPower(i)).toEqual(expectation);
  });
});
