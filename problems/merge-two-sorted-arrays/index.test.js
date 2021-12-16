const mergeTwoSortedArrays = require('.');
const { createLinkedListFromArray } = require('../../common/ListNode');

describe(mergeTwoSortedArrays, () => {
  it.each([
    [[1, 2, 4], [1, 3, 4], [1, 1, 2, 3, 4, 4]],
    [[], [], []],
    [[], [0], [0]],
  ])('for inputs %s and %s, it should create a merged array %s', (l1, l2, expectation) => {
    expect(mergeTwoSortedArrays(
      createLinkedListFromArray(l1),
      createLinkedListFromArray(l2),
    )).linkedListMatchesArray(expectation);
  });
});
