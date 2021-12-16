const maxPower = require('.');

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
