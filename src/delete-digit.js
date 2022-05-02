const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
deleteDigit=(n,a=String(n))=>Math.max(...a.split('').map((_,i)=>a.slice(0,i)+a.slice(i+1)))

module.exports = {
  deleteDigit
}
