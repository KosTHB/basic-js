const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 0;
  res = '';
  for (i = 0; i < str.length; i++) {
    count++;
    if (str[i] != str[i + 1]) {
      if (count > 1) {
        res += count;
      }
      res += str[i];
      count = 0;
    }
  }
  return res;
}

module.exports = {
  encodeLine
};
