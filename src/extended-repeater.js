const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let strWithAddition = str;
  let result = str;

//additional string that will be added to each repetition of the str;
  if (options.addition !== undefined) {
    strWithAddition = `${str}${options.addition}`;

    if (options.additionRepeatTimes > 1 && options.additionRepeatTimes != undefined) {
      var additionSeparator = options.additionSeparator;
      if (options.additionSeparator == undefined) {
        additionSeparator = '|';
      }
//  sets the number of repetitions of the addition;
      for (let i = 1; i < options.additionRepeatTimes; i++) {
        strWithAddition += `${additionSeparator}${options.addition}`;
      }
    }
  }

  result = strWithAddition;
  if (options.repeatTimes != undefined && options.repeatTimes > 1) {
// a string separating repetitions of the str;
    let separator = options.separator;
    if (options.separator == undefined) {
      separator = '+';
    }
    for (let i = 1; i < options.repeatTimes; i++) {
      result += `${separator}${strWithAddition}`;
    }
  }
  return result;
};

module.exports = {
  repeater
};
