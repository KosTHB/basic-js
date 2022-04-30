const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error(`'arr' parameter must be an instance of the Array!`);
  let resArr = [...arr]
  for (i = 0; i < resArr.length; i++) {
    if (resArr[i] === '--discard-next') {
      if (resArr[i + 2] === '--discard-prev' || resArr[i + 2] === '--double-prev') {
        resArr.splice(resArr[i - 1], 3);
      }
      else {
        resArr.splice(resArr[i - 1], 2);
      }
      i--;
    }
    
    if (resArr[i] === '--double-prev') {
      if (i === 0) {
        resArr.splice(i, 1);
      }
      else {
        resArr[i] = resArr[i - 1];
      }
    }
    if (resArr[i] === '--discard-prev') {
      if (i === 0) {
        resArr.splice(i, 1);
      }
      else {
        resArr.splice([i - 1], 2);
      }
    }
    if (resArr[i] === '--double-next') {
      if (i === resArr.length - 1) {
        resArr.splice(i, 1);
      }
      else {
        resArr[i] = resArr[i + 1];
      }
    }
    if (typeof (resArr[i]) === 'undefined') {
      resArr.splice(i, 1);
    }
  }
  return resArr;
}


module.exports = {
  transform
}

