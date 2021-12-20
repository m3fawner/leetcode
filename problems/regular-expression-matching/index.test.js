const regularExpressionMatching = require('.');

describe(regularExpressionMatching, () => {
  it.each([
    [['a', 'a'], true],
    [['a', 'b'], false],
    [['aa', 'aa'], true],
    [['ab', 'aa'], false],
    [['a', '.'], true],
    [['ab', 'a.'], true],
    [['ab', '.b'], true],
    [['ab', 'b.'], false],
    [['aa', 'a+'], true],
    [['aa', 'b+'], false],
    [['ab', 'ab+'], true],
    [['ab', 'a+b'], true],
    [['aa', 'a*'], true],
    [['ab', '.*'], true],
    [['aa', 'a'], false],
    [['', '.*'], true],
    [['', '.+'], false],
    [['ab', 'a+b+'], true],
    [['b', 'a*b+'], true],
    [['', 'a'], false],
    [['abcdef', 'abcdefg'], false],
    [['abcd', 'abcd.*'], true],
    [['abcd', '.*e'], false],
    [['abcd', 'a*.*'], true],
    [['abcdefg', '.*e.*'], true],
    // Failing test cases [["bbcbbcbcbbcaabcacb", "a*.*ac*a*a*.a..*.*"], false]
  ])('for input %s produce output %s', (args, expectation) => {
    expect(regularExpressionMatching(...args)).toEqual(expectation);
  });
});
