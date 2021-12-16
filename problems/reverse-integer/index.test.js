const reverseInteger = require('.');

describe(reverseInteger, () => {
  it.each([
    [123, 321],
    [-123, -321],
    [120, 21],
    [0, 0],
    [1534236469, 0],
    [-2147483648, 0],
  ])('for input %d produces %d', (input, expectation) => {
    expect(reverseInteger(input)).toEqual(expectation);
  });
});
