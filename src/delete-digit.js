const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr1 = n.toString().split('');
  let i = 0;
  while (arr1[i] >= arr1[i + 1]
    && i + 1 < arr1.length) {
    i++;
  }
  arr1.splice(i, 1)
  return Number(arr1.join(''))
}

module.exports = {
  deleteDigit
};
