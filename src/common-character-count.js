const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
getCommonCharacterCount=(s1,s2,s3=s2.split(''))=>{
  index=0;
  for(let i of s1) {
    let a=s3.findIndex(it=>it===i)
    a>=0?(index++,s3.splice(a,1)):null
  }
  return index
}
module.exports = {
  getCommonCharacterCount
};
