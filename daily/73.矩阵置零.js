/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  let [m, n] = [matrix.length, matrix[0].length];
  let [fi, fj] = [-1, -1];
  for (let i = 0; i < m && !~fi; ++i)
    for (let j = 0; j < n && !~fj; ++j) if (!matrix[i][j]) [fi, fj] = [i, j];
  if (!~fi) return matrix;
  for (let i = 0; i < m; ++i)
    for (let j = 0; j < n; ++j) if (!matrix[i][j]) [matrix[fi][j], matrix[i][fj]] = [0, 0];
  for (let j = 0; j < n; ++j)
    if (!matrix[fi][j]) for (let i = 0; i < m; ++i) if (fj !== j) matrix[i][j] = 0;
  for (let i = 0; i < m; ++i) if (!matrix[i][fj]) for (let j = 0; j < n; ++j) matrix[i][j] = 0;
  for (let i = 0; i < m; ++i) matrix[i][fj] = 0;
};
// @lc code=end

const matrix = [
  [1, 2, 3, 4],
  [5, 0, 7, 8],
  [0, 10, 11, 12],
  [13, 14, 15, 0]
];
setZeroes(matrix);
console.log(matrix);
