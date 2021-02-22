/*
 * @lc app=leetcode.cn id=766 lang=javascript
 *
 * [766] 托普利茨矩阵
 */

// @lc code=start
const ASC = (start, len) =>
  Array(len)
    .fill(0)
    .map((_, i) => i + start);

/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
const isToeplitzMatrix = function(matrix) {
  const arr = []
    .concat(ASC(0, matrix.length).map((t) => [t, 0]))
    .concat(ASC(1, matrix[0].length - 1).map((t) => [0, t]));
  for (const [x, y] of arr) {
    const val = matrix[x][y];
    for (let i = x + 1; i < matrix.length && i - x + y < matrix[0].length; ++i) {
      if (matrix[i][i - x + y] !== val) return false;
    }
  }
  return true;
};
// @lc code=end

const matrix = [
  [36, 86, 7, 94, 71, 59, 10],
  [19, 0, 86, 7, 94, 71, 59]
];
// const matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]
console.log(isToeplitzMatrix(matrix));
