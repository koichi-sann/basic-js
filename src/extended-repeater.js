const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
repeater=(s,o)=>{
typeof(o['repeatTimes'])=="undefined"?o.repeatTimes=1:null
typeof(o['separator'])=="undefined"?o.separator='+':null
typeof(o['addition'])=="undefined"?o.addition='':null
typeof(o['additionRepeatTimes'])=="undefined"?o.additionRepeatTimes=1:null
typeof(o['additionSeparator'])=="undefined"?o.additionSeparator='|':null
return (s+(o.addition+o.additionSeparator).repeat(o.additionRepeatTimes-1)+o.addition+o.separator).repeat(o.repeatTimes-1)+s+(o.addition+o.additionSeparator).repeat(o.additionRepeatTimes-1)+o.addition
}
module.exports = {
  repeater
};
