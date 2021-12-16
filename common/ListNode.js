function ListNode(val, next) {
  this.val = val;
  this.next = next;
}
const createLinkedListFromArray = (arr) => {
  if (!arr || arr.length === 0) {
    return null;
  }
  let head;
  let currentNode;
  arr.forEach((val) => {
    const newNode = new ListNode(val);
    if (currentNode) {
      currentNode.next = newNode;
    } else {
      head = newNode;
    }
    currentNode = newNode;
  });
  return head;
};
const createArrayFromList = (listNode) => {
  const result = [];
  let currentNode = listNode;
  while (currentNode) {
    result.push(currentNode.val);
    currentNode = currentNode.next;
  }
  return result;
};
module.exports = {
  createArrayFromList,
  createLinkedListFromArray,
  default: ListNode,
};
