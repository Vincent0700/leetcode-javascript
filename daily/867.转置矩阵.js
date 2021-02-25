/*
 * @lc app=leetcode.cn id=867 lang=javascript
 *
 * [867] 转置矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const mat = [];
  for (let i = 0; i < n; ++i) {
    mat.push(Array(m).fill(0));
  }
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      mat[j][i] = matrix[i][j];
    }
  }
  return mat;
};
// @lc code=end
