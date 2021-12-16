const addTwoNumbers = require('.');
const { createLinkedListFromArray } = require('../../common/ListNode');

describe(addTwoNumbers, () => {
  it.each([
    [[2, 4, 3], [5, 6, 4], [7, 0, 8]],
    [[0], [0], [0]],
    [[9], [9], [8, 1]],
    [[9, 9], [9, 9, 9], [8, 9, 0, 1]],
    [[0], [0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 1]],
    [[9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9], [8, 9, 9, 9, 0, 0, 0, 1]],
  ])('number arrays %s and %s should produce sum array %s', (l1, l2, expectation) => {
    expect(addTwoNumbers(
      createLinkedListFromArray(l1),
      createLinkedListFromArray(l2),
    )).linkedListMatchesArray(expectation);
  });
});
