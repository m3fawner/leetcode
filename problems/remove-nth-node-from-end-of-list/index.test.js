const { createLinkedListFromArray } = require('../../common/ListNode');
const removeNthNodeFromEndOfList = require('.');

describe(removeNthNodeFromEndOfList, () => {
  it.each([
    [[[1, 2, 3, 4, 5], 2], [1, 2, 3, 5]],
    [[[1], 1], []],
    [[[1, 2], 1], [1]],
    [[[5, 7, 4, 3], 2], [5, 7, 3]],
    [[[1, 2], 2], [2]],
  ])('for input %s produce output %s', ([head, n], expectation) => {
    expect(removeNthNodeFromEndOfList(
      createLinkedListFromArray(head),
      n,
    )).linkedListMatchesArray(expectation);
  });
});
