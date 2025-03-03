const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 function sortByHeight(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if ( arr[j] == -1 || arr[i] == -1 || arr[i] == arr[j] ) {
        continue;
      };
      if (arr[i] > arr[j] && i < j) [arr[i], arr[j]] = [arr[j], arr[i]];
      continue;
    }
  }
  return arr;
}

module.exports = {
  sortByHeight
};
