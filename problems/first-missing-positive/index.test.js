const firstMissingPositive = require('.');

describe(firstMissingPositive, () => {
  it.each([
    [[1, 2, 0], 3],
    [[3, 4, -1, 1], 2],
    [[7, 8, 9, 11, 12], 1],
  ])('for input %s produce output %d', (input, expectation) => {
    expect(firstMissingPositive(input)).toEqual(expectation);
  });
});
