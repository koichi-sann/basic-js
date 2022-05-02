const { NotImplementedError } = require('../extensions/index.js')

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
isMAC48Address=(n,a=n.split(''),b=[])=>{
  a.forEach(i=>['-','0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'].filter(x=>x===i?b.push(i):null))
  return a.length===b.length?true:false
}
module.exports = {
  isMAC48Address
}
