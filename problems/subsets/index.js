const subsets = (nums) => {
  const result = [[]];
  for (let i = 0; i < nums.length; i += 1) {
    const size = result.length;
    for (let j = 0; j < size; j += 1) {
      const subset = [nums[i], ...result[j]];
      result.push(subset);
    }
  }
  return result;
};
subsets.runtime = 99.88;
subsets.memory = 16.20;
subsets.problemURL = 'https://leetcode.com/problems/subsets/';
subsets.dateCompleted = new Date('06/03/2018');

module.exports = subsets;
