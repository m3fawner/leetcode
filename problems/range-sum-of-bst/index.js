const rangeOfSumBST = (tree, low, high) => {
  if (!tree || ((tree.val > high || tree.val < low) && (!tree.left && !tree.right))) {
    return 0;
  }
  let sum = 0;
  if (tree.val >= low && tree.val <= high) {
    sum += tree.val;
  }
  sum += rangeOfSumBST(tree.left, low, high);
  sum += rangeOfSumBST(tree.right, low, high);

  return sum;
};
rangeOfSumBST.runtime = 63.65;
rangeOfSumBST.memory = 86.62;
rangeOfSumBST.problemURL = 'https://leetcode.com/problems/range-sum-of-bst/';
rangeOfSumBST.dateCompleted = new Date('12/23/2021');

module.exports = rangeOfSumBST;
