/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
var hasOverlap = (arr) => {
  const map = Array(10).fill(0);
  for (let n of arr) {
    if (n !== '.') {
      if (!map[n]) map[n]++;
      else return true;
    }
  }
  return false;
};
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  for (let i = 0; i < 9; ++i) {
    if (hasOverlap(board[i])) return false;
    const column = board.reduce((acc, cur) => [...acc, cur[i]], []);
    if (hasOverlap(column)) return false;
  }
  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      const arr = [
        [i, j],
        [i, j + 1],
        [i, j + 2],
        [i + 1, j],
        [i + 1, j + 1],
        [i + 1, j + 2],
        [i + 2, j],
        [i + 2, j + 1],
        [i + 2, j + 2]
      ].map(([a, b]) => board[a][b]);
      if (hasOverlap(arr)) return false;
    }
  }
  return true;
};
// @lc code=end

const arr = [
  ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9']
];
console.log(isValidSudoku(arr));
