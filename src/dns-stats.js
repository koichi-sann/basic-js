const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
getDNSStats=d=>{
  if(d.length===0) return {}
  d=d.map(i=>i.split('.').reverse()).flat().reduce((a,b)=>{a[b]=(a[b]||0)+1;return a},{})
  k=Object.keys(d)
  a=[]
  a.push(`.${k[0]}`)
  o={}
  for(let i=0;i<a.length;i++){
    for(let j=i+1;j<k.length;j++){
      a.push(a[i]+`.${[k[j]]}`)
      break;
    }
  }
  for(let i=0;i<a.length;i++) o[a[i]]=Object.values(d)[i]
 return o
}
module.exports = {
  getDNSStats
};
