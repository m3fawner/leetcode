const subsets = require('.');

const sortArray = (array) => {
  array.forEach((child) => {
    child.sort();
  });
};
describe(subsets, () => {
  it.each([
    [[1, 2, 3], [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]],
    [[0], [[], [0]]],
  ])('for input %s produce output %s', (input, expectation) => {
    expect(sortArray(subsets(input))).toEqual(sortArray(expectation.sort()));
  });
});
