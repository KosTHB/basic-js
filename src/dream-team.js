const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // var members = members.sort();
  if (!members || Array.isArray(members) == false) {
    return false;
  };
  var abbreviation = '';
  for (i = 0; i < members.length; i++) {
    if (typeof(members[i]) != 'string' ) {
      continue;
    }
    else {
      abbreviation += members[i].trim()[0];
    }
  }
  return (abbreviation.toUpperCase()).split('').sort().join('');
}

module.exports = {
  createDreamTeam
};
