const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
// 0,693
const REACTION_SPEED = 0.693;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (!sampleActivity || isFinite(sampleActivity) !== true) {
    return false;
  }
  if (typeof (sampleActivity) != 'string' || sampleActivity == ' ') {
    return false;
  }
  if (Number(sampleActivity) <= 0 || Number(sampleActivity) > 15) {
    return false;
  }
  else {
    return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / (REACTION_SPEED / HALF_LIFE_PERIOD));
  }
}

module.exports = {
  dateSample
};


