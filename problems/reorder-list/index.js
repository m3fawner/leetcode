const reorderList = (head) => {
  let length = 0;
  let node = head;
  while (node) {
    length += 1;
    node = node.next;
  }
  const midway = Math.floor(length / 2) + 1;
  let reverseList = head;
  let previous;
  for (let i = 0; i < midway; i += 1) {
    previous = reverseList;
    reverseList = reverseList.next;
  }
  previous.next = null; // split the list fully
  const arr = [];
  while (reverseList) {
    arr.push(reverseList);
    reverseList = reverseList.next;
  }
  node = head;
  while (node) {
    const nth = arr.pop();
    const toAdvanceTo = node.next;
    if (nth) {
      node.next = nth;
      nth.next = toAdvanceTo;
    }
    node = toAdvanceTo;
  }
  return head;
};
reorderList.runtime = 90.38;
reorderList.memory = 70.63;
reorderList.problemURL = 'https://leetcode.com/problems/reorder-list/';
reorderList.dateCompleted = new Date('12/23/2021');

module.exports = reorderList;
