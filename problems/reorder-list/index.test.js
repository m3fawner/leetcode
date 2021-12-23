const { createLinkedListFromArray } = require('../../common/ListNode');
const reorderList = require('.');

describe(reorderList, () => {
  it.each([
    [[1, 2, 3, 4], [1, 4, 2, 3]],
    [[1, 2, 3, 4, 5], [1, 5, 2, 4, 3]],
  ])('for input %s produce output %s', (input, expectation) => {
    expect(reorderList(createLinkedListFromArray(input))).linkedListMatchesArray(expectation);
  });
});
