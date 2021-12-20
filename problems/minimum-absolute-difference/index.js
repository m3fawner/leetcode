const minimumAbsoluteDifference = (arr) => {
  // O(n log n)
  arr.sort((a, b) => (a > b ? 1 : -1));
  let minimumAbsDifference = null;

  // O (n)
  for (let i = 0; i < arr.length - 1; i += 1) {
    const difference = Math.abs(arr[i + 1] - arr[i]);
    if (minimumAbsDifference === null) {
      minimumAbsDifference = difference;
    } else {
      minimumAbsDifference = Math.min(minimumAbsDifference, difference);
    }
  }
  const pairs = [];
  // O (n)
  for (let i = 0; i < arr.length - 1; i += 1) {
    const curr = arr[i];
    const j = i + 1;
    if (Math.abs(arr[j] - curr) === minimumAbsDifference) {
      pairs.push([curr, arr[j]]);
    }
  }

  return pairs;
};
minimumAbsoluteDifference.runtime = 70.76;
minimumAbsoluteDifference.memory = 54.66;
minimumAbsoluteDifference.problemURL = 'https://leetcode.com/problems/minimum-absolute-difference/';
minimumAbsoluteDifference.dateCompleted = new Date('12/20/2021');

module.exports = minimumAbsoluteDifference;
