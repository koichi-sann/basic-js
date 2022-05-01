const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */

// sortByHeight = (a) => {
//   filtered = a.filter(i=>i>0).sort((a,b)=>a-b)
//   count = 0
// return sorted = a.reduce((acc, cur) => {
//     return [...acc, (cur !== -1 ? filtered[count++] : cur)]
//   }, [])
// }
sortByHeight=a=>a.reduce((q,c,i)=>c==-1?q.splice(i,0,c).concat(q):q,a.filter(i=>i>0).sort((a,b)=>a-b))
module.exports = {
  sortByHeight,
}
