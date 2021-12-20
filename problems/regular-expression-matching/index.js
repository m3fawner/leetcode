const ONE_OR_MANY = '+';
const ZERO_OR_MANY = '*';
const ANY_CHARACTER = '.';

/**
 * This one is particularly challenging.
 *
 * My first approach was "advance until you hit a character that does not satisfy the
 * current one/zero to many expression"
 *
 * But that's not right because the regex could end with another expression (i.e.
 * abcd .*d should return true while abcd .*e should return false). My attempt is not
 */

const regularExpressionMatching = (str, regex) => {
  let characterToMatch = regex[0];
  let match = true;
  let strIndex = 0;
  let regexIndex = 0;
  let multipleRange = null;

  while (strIndex < str.length || regexIndex < regex.length) {
    const isZeroToMany = regex[regexIndex + 1] === ZERO_OR_MANY;
    const isOneOrMany = regex[regexIndex + 1] === ONE_OR_MANY;
    let char = str[strIndex];
    if (isZeroToMany) {
      while (char === characterToMatch || (char && characterToMatch === ANY_CHARACTER)) {
        if (multipleRange === null) {
          multipleRange = [strIndex];
        }
        strIndex += 1;
        char = str[strIndex];
      }
      if (multipleRange) {
        multipleRange[1] = strIndex;
      }
      regexIndex += 2;
      characterToMatch = regex[regexIndex];
    } else if (isOneOrMany) {
      while (char === characterToMatch || (char && characterToMatch === ANY_CHARACTER)) {
        if (multipleRange === null) {
          multipleRange = [strIndex];
        }
        strIndex += 1;
        char = str[strIndex];
      }
      if (multipleRange) {
        // We must have at least one character, so we can't use the first to
        // satisfy the next regex char
        multipleRange[0] += 1;
        multipleRange[1] = strIndex;
      } else {
        match = false;
        break;
      }
      regexIndex += 2;
      characterToMatch = regex[regexIndex];
    } else if (char === characterToMatch || (char && characterToMatch === ANY_CHARACTER)) {
      strIndex += 1;
      regexIndex += 1;
      characterToMatch = regex[regexIndex];
    } else if (multipleRange) {
      // At this point we've exhausted the list of matchable characters but not the regex.
      // We do, however, know the range that the "multiple" executed on that may have been
      // too greedy.
      // From here, we should attempt to match the remaining regular expression with the substrings
      // starting at index 0 of the multiple through the end of the multiple range. This represents
      // characters that were matched as a part of the multiple-regex but could be valid characters
      // for subsequent parts of the regular expression
      let matchedSubstr = false;
      for (let i = multipleRange[0]; i <= multipleRange[1]; i += 1) {
        if (regularExpressionMatching(str.slice(i), regex.slice(regexIndex))) {
          matchedSubstr = true;
          break;
        }
      }
      if (matchedSubstr) {
        match = true;
        break;
      } else {
        multipleRange = null;
      }
    } else {
      match = false;
      break;
    }
  }
  return match;
};
regularExpressionMatching.runtime = 0;
regularExpressionMatching.memory = 0;
regularExpressionMatching.problemURL = '';
regularExpressionMatching.dateCompleted = null;

module.exports = regularExpressionMatching;
