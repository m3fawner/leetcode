const removeNthNodeFromTheEndOfList = (head, n) => {
  let nthPreviousNode = head;
  let nodePrior = head;
  let currentNode = head;
  let passedOverCount = 0;
  while (currentNode) {
    currentNode = currentNode.next;
    passedOverCount += 1;
    if (passedOverCount > n) {
      nodePrior = nthPreviousNode;
      nthPreviousNode = nodePrior.next;
    }
  }
  if (passedOverCount === n) {
    return head.next ?? null;
  }
  nodePrior.next = nthPreviousNode?.next;
  return head;
};
removeNthNodeFromTheEndOfList.runtime = 62.66;
removeNthNodeFromTheEndOfList.memory = 69.86;
removeNthNodeFromTheEndOfList.problemURL = 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/';
removeNthNodeFromTheEndOfList.dateCompleted = new Date('12/20/2021');

module.exports = removeNthNodeFromTheEndOfList;
