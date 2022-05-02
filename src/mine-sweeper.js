const { NotImplementedError } = require('../extensions/index.js')

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
minesweeper=m=>{
  c=m.length
  r=m[0].length
  a=[...Array(c)].map(_=>Array(r).fill(0))
  os=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]]
  a.map((x,y)=>x.map((_,z)=>os.forEach(([dx,dy])=>{s=!!(m[y+dy]&&m[y+dy][z+dx]);return a[y][z]+=s})))
  return a
}
module.exports = {
  minesweeper
}
