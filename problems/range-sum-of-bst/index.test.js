const { createTreeFromArray } = require('../../common/BinarySearchTree');
const rangeSumOfBST = require('.');

describe(rangeSumOfBST, () => {
  it.each([
    [[[25], 7, 10], 0],
    [[[25], 20, 30], 25],
    [[[25, 8], 7, 10], 8],
    [[[25, 30], 26, 35], 30],
    [[[10, 5, 15, 3, 7, 18], 7, 15], 32],
    [[[10, 5, 15, 3, 7, 13, 18, 1, 6], 6, 10], 23],
  ])('for input %s produce output %s', ([tree, low, high], expectation) => {
    expect(rangeSumOfBST(createTreeFromArray(tree), low, high)).toEqual(expectation);
  });
});
