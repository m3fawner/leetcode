const OPENING_TO_CLOSING = {
  '{': '}',
  '[': ']',
  '(': ')',
};
const CLOSING_TO_OPENING = {
  '}': '{',
  ']': '[',
  ')': '(',
};
const validParenthesis = (s) => {
  const stack = [];
  for (let i = 0; i < s.length; i += 1) {
    const char = s[i];
    if (OPENING_TO_CLOSING[char]) {
      stack.push(char);
    } else {
      const last = stack.pop();
      if (last !== CLOSING_TO_OPENING[char]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

validParenthesis.runtime = 100;
validParenthesis.memory = 100;
validParenthesis.problemURL = 'https://leetcode.com/problems/valid-parentheses/';
validParenthesis.dateCompleted = new Date('08/20/2019');

module.exports = validParenthesis;
