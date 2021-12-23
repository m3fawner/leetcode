const decodeString = require('.');

describe(decodeString, () => {
  it.each([
    ['abc', 'abc'],
    ['3[a]', 'aaa'],
    ['3[a]2[bc]', 'aaabcbc'],
    ['3[a2[c]]', 'accaccacc'],
    ['ab2[a2[c]3[b]a]', 'abaccbbbaaccbbba'],
    ['2[abc]3[cd]ef', 'abcabccdcdcdef'],
    ['10[a]', 'aaaaaaaaaa'],
  ])('for input %s produce output %s', (input, expectation) => {
    expect(decodeString(input)).toEqual(expectation);
  });
  it('should throw an error if there are a mismatch of closing brackets', () => {
    expect(() => decodeString('3[a4[a]')).toThrow();
  });
});
