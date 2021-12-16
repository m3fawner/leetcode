const setMismatch = require('.');

describe(setMismatch, () => {
  it.each([
    [[1, 2, 2, 4], [2, 3]],
    [[1, 1], [1, 2]],
  ])('for input %s produce output %s', (input, expectation) => {
    expect(setMismatch(input)).toEqual(expectation);
  });
});
