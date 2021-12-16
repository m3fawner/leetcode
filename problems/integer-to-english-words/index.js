const SINGLE_DIGIT = {
  0: 'Zero',
  1: 'One',
  2: 'Two',
  3: 'Three',
  4: 'Four',
  5: 'Five',
  6: 'Six',
  7: 'Seven',
  8: 'Eight',
  9: 'Nine',
};
const TEENS = {
  10: 'Ten',
  11: 'Eleven',
  12: 'Twelve',
  13: 'Thirteen',
  14: 'Fourteen',
  15: 'Fifteen',
  16: 'Sixteen',
  17: 'Seventeen',
  18: 'Eighteen',
  19: 'Nineteen',
};
const TENS = {
  2: 'Twenty',
  3: 'Thirty',
  4: 'Forty',
  5: 'Fifty',
  6: 'Sixty',
  7: 'Seventy',
  8: 'Eighty',
  9: 'Ninety',
};
const IDK = {
  HUNDRED: 'Hundred',
  THOUSAND: 'Thousand',
  MILLION: 'Million',
  BILLION: 'Billion',
};
const THOUSANDS_TO_PART = {
  0: null,
  1: IDK.THOUSAND,
  2: IDK.MILLION,
  3: IDK.BILLION,
};
const handleThrees = (num, level) => {
  const first = Math.floor(num / 100);
  const second = Math.floor((num - (first * 100)) / 10);
  const last = num - (first * 100) - (second * 10);
  const parts = [];
  if (first > 0) {
    parts.push(`${SINGLE_DIGIT[first]} ${IDK.HUNDRED}`);
  }
  if (second > 0 && second !== 1) {
    parts.push(TENS[second]);
  }
  if (second === 1) {
    const teen = num - (first * 100);
    parts.push(TEENS[teen]);
  } else if (last > 0) {
    parts.push(SINGLE_DIGIT[last]);
  }
  if (level) {
    parts.push(level);
  }
  return parts.join(' ');
};
const integerToEnglishWords = (num) => {
  if (num === 0) {
    return SINGLE_DIGIT[0];
  }
  const parts = [];
  let temp = num;
  // At most 4 sections of 3 (billions, millions, thousands, > hundreds)
  for (let i = 0; i <= 3; i += 1) {
    const groupCandidate = (temp / 1000).toFixed(3).match(/\d\.(\d+)/);
    if (groupCandidate && groupCandidate[1]) {
      const groupOfThree = parseInt(groupCandidate[1], 10);
      if (groupOfThree !== 0) {
        parts.push(handleThrees(groupOfThree, THOUSANDS_TO_PART[i]));
      }
    }
    temp = Math.floor(temp / 1000);
    if (temp === 0) {
      break;
    }
  }
  return parts.reverse().filter((a) => a).join(' ');
};
integerToEnglishWords.runtime = 97.92;
integerToEnglishWords.memory = 100;
integerToEnglishWords.problemURL = 'https://leetcode.com/problems/integer-to-english-words/';

module.exports = integerToEnglishWords;
