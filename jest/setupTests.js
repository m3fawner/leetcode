const expect = require('expect');
const { createArrayFromList, default: ListNode } = require('../common/ListNode');

expect.extend({
  linkedListMatchesArray(received, array) {
    // null is a valid representation of an empty list, don't fail in that instance
    if (!(received instanceof ListNode) && received !== null) {
      return {
        pass: false,
        message: () => `Expected the type to be that of ListNode, instead received ${typeof received}`,
      };
    }
    const list = createArrayFromList(received);
    const message = () => `Expected linked list equal to ${array.toString()}, but received ${list?.toString()}`;
    if (list.length !== array.length) {
      return {
        pass: false,
        message,
      };
    }
    for (let i = 0; i < list.length; i += 1) {
      if (list[i] !== array[i]) {
        return {
          pass: false,
          message,
        };
      }
    }
    return {
      message: () => 'Linked list matched array expectation',
      pass: true,
    };
  },
});
