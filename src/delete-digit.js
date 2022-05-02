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
deleteDigit=(n,a=String(n).split(''))=>{
  b=a.slice()
  c=a.slice()
  m1=String(Math.min(...a))
  i1=a.indexOf(m1)
  b.splice(i1, 1)
  m2=String(Math.min(...b))
  i2=a.indexOf(m2)
  c.splice(i2, 1)
  return +b.join('')>+c.join('')?+b.join(''):+c.join('')
}
module.exports = {
  deleteDigit
};
