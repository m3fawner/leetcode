const integerToEnglishWords = require('.');

describe(integerToEnglishWords, () => {
  it.each([
    [123, 'One Hundred Twenty Three'],
    [12345, 'Twelve Thousand Three Hundred Forty Five'],
    [1234567, 'One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven'],
    [1234567891, 'One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One'],
    [0, 'Zero'],
  ])('for an input of %d it should read as %s', (num, expectation) => {
    expect(integerToEnglishWords(num)).toEqual(expectation);
  });
});
