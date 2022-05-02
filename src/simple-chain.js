const { NotImplementedError } = require('../extensions/index.js')

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  links: [],
  getLength() {
    return this.links.length
  },
  addLink(v) { 
    this.links.push(v)
    return this
  },
  removeLink(p) {
    if (!Number.isInteger(p)|| p < 1|| p > this.links.length) {
      this.links.length = 0
      throw Error ('You can\'t remove incorrect link!')
    }
    this.links.splice(p-1,1)
    return this
  },
  reverseChain() {
    this.links.reverse()
    return this
  },
  finishChain() {
    chain = this.links.map(i=>`( ${i} )`).join('~~')
    this.links.length = 0
    return chain
  }}

module.exports = {
  chainMaker
}
