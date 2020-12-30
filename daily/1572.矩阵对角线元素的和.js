/*
 * @lc app=leetcode.cn id=1572 lang=javascript
 *
 * [1572] 矩阵对角线元素的和
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
  const m = mat.length;
  if (m === 1) return mat[0][0];
  const sum = mat.reduce((acc, row, i) => acc + row[i] + row[m - 1 - i], 0);
  return m & 1 ? sum - mat[m >> 1][m >> 1] : sum;
};
// @lc code=end
