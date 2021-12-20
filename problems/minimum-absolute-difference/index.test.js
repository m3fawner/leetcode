const minimumAbsoluteDifference = require('.');

describe(minimumAbsoluteDifference, () => {
  it.each([
    [[4, 2, 1, 3], [[1, 2], [2, 3], [3, 4]]],
    [[1, 3, 6, 10, 15], [[1, 3]]],
    [[3, 8, -10, 23, 19, -4, -14, 27], [[-14, -10], [19, 23], [23, 27]]],
  ])('for input %s produce output %s', (input, expectation) => {
    expect(minimumAbsoluteDifference(input)).toEqual(expectation);
  });
});
