const setMismatch = (nums) => {
  const sorted = nums.sort((a, b) => a - b);
  let dupe;
  let expected;
  let index;
  sorted.forEach((num, i) => {
    if (num === sorted[i + 1]) {
      dupe = num;
      index = i;
    }
  });
  const withDupeRemoved = sorted.slice(0, index).concat(sorted.slice(index + 1));
  for (let i = 0; i < withDupeRemoved.length; i += 1) {
    if (withDupeRemoved[i] !== i + 1) {
      expected = i + 1;
      break;
    }
  }
  if (expected === undefined) expected = nums.length;
  return [dupe, expected];
};
setMismatch.runtime = 50;
setMismatch.memory = 38.29;
setMismatch.problemURL = 'https://leetcode.com/problems/set-mismatch/';
setMismatch.dateCompleted = new Date('06/03/2018');

module.exports = setMismatch;
