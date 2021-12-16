const validParenthesis = require('.');

describe(validParenthesis, () => {
  it.each([
    ['()', true],
    ['()[]{}', true],
    ['(]', false],
  ])('for input %s produces boolean value %s', (input, expectation) => {
    expect(validParenthesis(input)).toEqual(expectation);
  });
});
