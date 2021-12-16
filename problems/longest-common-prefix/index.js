const longestCommonPrefix = (strs) => {
  let longestPrefix = strs[0] || '';
  for (let i = 1; i < strs.length; i += 1) {
    do {
      if (!strs[i].startsWith(longestPrefix)) {
        longestPrefix = longestPrefix.substr(0, longestPrefix.length - 1);
      } else {
        break;
      }
    } while (longestPrefix.length > 0);
    if (longestPrefix.length === 0) break;
  }
  return longestPrefix;
};

longestCommonPrefix.runtime = 99.96;
longestCommonPrefix.memory = 90.59;
longestCommonPrefix.problemURL = 'https://leetcode.com/problems/longest-common-prefix/';
longestCommonPrefix.dateCompleted = new Date('06/08/2018');

module.exports = longestCommonPrefix;
