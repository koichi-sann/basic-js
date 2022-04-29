const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
getSeason=d=>{
  if(typeof d=='undefined')return 'Unable to determine the time of year!'
  if(Object.keys(d).length>0)throw Error('Invalid date!')
  if(!(d instanceof Date))throw Error('Invalid date!')
  m=d.getMonth()
return m<=1||m==11?'winter':m<=4&&m>=2?'spring':m<=7&&m>=5?'summer':'autumn'
}
module.exports = {
  getSeason
};
