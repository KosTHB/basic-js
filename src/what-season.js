const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
    const check = Object.prototype.toString.call(date)
    if (check === "[object Undefined]") return 'Unable to determine the time of year!'
    const objectSymbols = Object.getOwnPropertySymbols(date);
    if (check !== "[object Date]" || objectSymbols.length !== 0) throw new Error(`Invalid date!`);

    if (date.getMonth() >= 0 && date.getMonth() < 2) return  "winter";
    if (date.getMonth() == 2) return  "spring";
    if (date.getMonth() > 2 && date.getMonth() < 5) return  "spring";
    if (date.getMonth() == 5) return  "summer";
    if (date.getMonth() > 5 && date.getMonth() < 8) return  "summer";
    if (date.getMonth() == 8) return  "fall";
    if (date.getMonth() >= 8 && date.getMonth() < 11) return  "fall";
    if (date.getMonth() == 11) return  "winter";
}

module.exports = {
  getSeason
};
