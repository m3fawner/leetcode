const firstMissingPositive = (nums) => {
  let max = 0;
  const found = {};
  nums.forEach((num) => {
    found[num] = true;
    max = Math.max(max, num);
  });
  for (let i = 1; i <= max; i += 1) {
    if (!found[i]) {
      return i;
    }
  }
  return max + 1;
};
firstMissingPositive.runtime = 100;
firstMissingPositive.memory = 100;
firstMissingPositive.problemURL = 'https://leetcode.com/problems/first-missing-positive/';
firstMissingPositive.dateCompleted = new Date('08/20/2019');

module.exports = firstMissingPositive;
