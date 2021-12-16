const minimumNumberOfArrowsToBurstBalloons = require('.');

describe(minimumNumberOfArrowsToBurstBalloons, () => {
  it.each([
    [[[10, 16], [2, 8], [1, 6], [7, 12]], 2],
    [[[1, 2], [3, 4], [5, 6], [7, 8]], 4],
    [[[1, 2], [2, 3], [3, 4], [4, 5]], 2],
    [[], 0],
  ])('for input %s produce output %s', (input, expectation) => {
    expect(minimumNumberOfArrowsToBurstBalloons(input)).toEqual(expectation);
  });
});
