const ListNode = require('../../common/ListNode').default;

const addTwoNumbers = (l1, l2) => {
  // lowest index represents the 1s, next 10s, etc
  // it is ok to sum two mismatched lengths as any
  // extra digits represent the number + 0 for that
  // power of 10
  // Once one list is empty, we can just set the next
  // to the other lists' current node and return early
  let head;
  let currentSumNode;
  let currentL1 = l1;
  let currentL2 = l2;
  let carryover = 0;
  while (currentL1 || currentL2 || carryover) {
    const sum = (currentL1?.val ?? 0) + (currentL2?.val ?? 0) + carryover;
    carryover = Math.floor(sum / 10);
    const newNode = new ListNode(sum % 10);
    if (!head) {
      head = newNode;
    }
    if (currentSumNode) {
      currentSumNode.next = newNode;
    }
    currentSumNode = newNode;
    currentL1 = currentL1?.next;
    currentL2 = currentL2?.next;
  }
  return head;
};

addTwoNumbers.runtime = 83.20;
addTwoNumbers.memory = 64.71;
addTwoNumbers.problemURL = 'https://leetcode.com/problems/add-two-numbers/';
module.exports = addTwoNumbers;
