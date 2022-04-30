const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  result: [],
  getLength() {
    return this.getLength;
  },
  addLink(value) {
    if (value == 'undefined') {
      this.result.push(' ')
    }
    else {
      this.result.push(value);
    }
    return this;
  },
  removeLink(position) {
    if (Number.isInteger(position) == 'false' || position <= 0 || position > this.result.length || position == 'null' || typeof(position) != 'number') {
      this.result.length = 0;
      throw new Error(`You can't remove incorrect link!`);
    }
    else {
      this.result.splice(position - 1, 1);
    }
    return this;
  },
  reverseChain() {
    this.result.reverse();
    return this
  },
  finishChain() {
    let resultString = '( ' + this.result[0] + ' )';
    for(let i = 1; i<this.result.length;i++){
      resultString += '~~( ' + this.result[i] + ' )'; 
    }
    this.result = [];
    return resultString;
  }
};

module.exports = {
  chainMaker
};
