const stringToIntegerATOI = require('.');

describe(stringToIntegerATOI, () => {
  it.each([
    ['42', 42],
    ['-42', -42],
    ['4193 with words', 4193],
    ['   2324 with leading whitespace', 2324],
    ['+2424', 2424],
    ['proceeded with words 4239', 0],
    ['+24+25', 24],
    ['24.25', 24],
    ['-91283472332', (-2) ** 31],
    ['91283472332', 2 ** 31 - 1],
    ['+-12', 0],
  ])('for input %s produce output %s', (input, expectation) => {
    expect(stringToIntegerATOI(input)).toEqual(expectation);
  });
});
