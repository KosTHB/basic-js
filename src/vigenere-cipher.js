const { NotImplementedError } = require('../extensions/index.js');


class VigenereCipheringMachine {
  constructor(typeOfMachine) {
    if (typeOfMachine == undefined) {
      typeOfMachine = true;
    }
    this.typeOfMachine = typeOfMachine;
  }

  encrypt(str, key) {
    if (key == undefined || str == undefined) {
      throw new Error('Incorrect arguments!');
    }

    key = key.toUpperCase();
    str = str.toUpperCase();
    let moveForward = 0;
    let result = '';
    for (let i = 0; i < str.length; i++) {
      let charCode = str.charCodeAt(i);
// If is not Latinian
      if (charCode > 90 || charCode < 65) {
        result += str[i];
        moveForward++;
        continue;
      }
//  method returns a string created from the specified sequence of UTF-16 code units. 
      result += String.fromCharCode(
        ((charCode - 65 + key.charCodeAt((i - moveForward) % key.length) - 65) % 26) + 65
      );
    }
    if (this.typeOfMachine) {
      return result;
    }
// reverse
    return result.split('').reverse().join('');
  }

  decrypt(str, key) {
    if (str == undefined || key == undefined) {
      throw new Error('Incorrect arguments!');
    }
    key = key.toUpperCase();
    str = str.toUpperCase();
    let moveForward = 0;
    let result = '';
    for (let i = 0; i < str.length; i++) {
      const charCode = str.charCodeAt(i);
      if (charCode < 65 || charCode > 90) {
        result += str[i];
        moveForward++;
        continue;
      }
      result += String.fromCharCode(
        ((charCode - 65 + 26 - (key.charCodeAt((i - moveForward) % key.length) - 65)) % 26) + 65
      );
    }
    if (this.typeOfMachine) {
      return result;
    }
    return result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};