const identifyNextNode = (l1, l2) => {
  if (l1.val < l2.val) {
    return l1;
  }
  return l2;
};

const mergeTwoSortedArrays = (list1, list2) => {
  let currentL1 = list1;
  let currentL2 = list2;
  let head = null;
  let currentNode = null;
  while (currentL1 || currentL2) {
    let newNode;
    let complete = false;
    if (!currentL1) {
      newNode = currentL2;
      complete = true;
    }
    if (!currentL2) {
      newNode = currentL1;
      complete = true;
    }
    if (!newNode) {
      newNode = identifyNextNode(currentL1, currentL2);
    }

    // Advance the linked list of the identified value
    if (newNode === currentL1) {
      currentL1 = currentL1.next;
    } else {
      currentL2 = currentL2.next;
    }

    // Manage the linked list
    if (!head) {
      head = newNode;
    }
    if (currentNode) {
      currentNode.next = newNode;
    }
    currentNode = newNode;
    if (complete) {
      break;
    }
  }
  return head;
};
mergeTwoSortedArrays.runtime = 67.79;
mergeTwoSortedArrays.memory = 49.38;
mergeTwoSortedArrays.problemURL = 'https://leetcode.com/problems/merge-two-sorted-lists/';
mergeTwoSortedArrays.dateCompleted = new Date('12/10/2021');

module.exports = mergeTwoSortedArrays;
