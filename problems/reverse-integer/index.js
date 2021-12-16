const reverseInteger = (x) => {
  const isNegative = x < 0;
  let string = `${x}`;
  if (isNegative) string = string.slice(1, string.length);
  const reversed = string.split('').reverse().join('');
  const reversedInt = parseInt(reversed, 10) * (isNegative ? -1 : 1);
  return reversedInt > 2 ** 31 || reversedInt < -1 * 2 ** 31 ? 0 : reversedInt;
};

reverseInteger.runtime = 99.62;
reverseInteger.memory = 72.32;
reverseInteger.problemURL = 'https://leetcode.com/problems/reverse-integer/';
reverseInteger.dateCompleted = new Date('06/05/2018');

module.exports = reverseInteger;
