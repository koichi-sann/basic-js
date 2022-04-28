const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
getEmailDomain=s=>s.match(/@[a-zA-Z0-9]+.+.+/).join('').slice(1)
module.exports = {
  getEmailDomain
};
