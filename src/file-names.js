const { NotImplementedError } = require('../extensions/index.js')

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
renameFiles=n=>{
  c=1
  a=n
  for(let i=0;i<n.length;i++){
    for(let j=i+1;j<n.length;j++){
      if(n[i]===n[j]) a[j]=n[i]+`(${c++})`
    }
    c=1
  }
  return a
}
module.exports = {
  renameFiles
};
