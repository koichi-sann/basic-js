const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
transform=a=>{
  s=['--discard-next','--discard-prev','--double-next','--double-prev']
  if(!Array.isArray(a)) throw Error("'arr' parameter must be an instance of the Array!")
  if(a.length==0) return []
  nA=[]
  for (let i=0;i<a.length;i++) {
    a[i]==s[2]?nA.push(a[i+1]):a[i]==s[3]&&i!==0?nA.push(nA[nA.length-1])
   :a[i]==s[0]?a[i+=1]==s[1]||a[i+=1]==s[3]:a[i]==s[1]?nA.pop():nA.push(a[i])
  }
  nA[0]==s[3]||nA[0]==s[1]?nA.shift():0
  typeof(nA[nA.length-1])=='undefined'?nA.pop():0
  return nA
}
module.exports = {
  transform
};
