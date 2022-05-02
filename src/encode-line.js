const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
encodeLine=s=>{
  a=[]
  c=0
  for(let i=0;i<s.length;i++){
    c++
    if(s[i]!==s[i+1]){
      a.push([c,s[i]])
      c=0
    }
  }
  return a.flat().join('').replace(/[1]/g,'')
}
module.exports = {
  encodeLine
};
