const { NotImplementedError } = require('../extensions/index.js');

const M = 15;
const H = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
dateSample=(s,k=0.693)=>typeof s!=='string'||+s===0||isNaN(+s)||s<0||s>15?false:Math.ceil((Math.log(M/+s))/(k/H))
module.exports = {
  dateSample
};
