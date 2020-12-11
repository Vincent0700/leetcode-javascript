/*
 * @lc app=leetcode.cn id=1380 lang=javascript
 *
 * [1380] 矩阵中的幸运数
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function(matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  const result = [];
  for (let i = 0; i < m; ++i) {
    let min = 100001;
    let minArr = [];
    for (let j = 0; j < n; ++j) {
      if (matrix[i][j] < min) {
        min = matrix[i][j];
        minArr = [i, j];
      }
    }
    let max = 0;
    let maxArr = [];
    const j = minArr[1];
    for (let k = 0; k < m; ++k) {
      if (matrix[k][j] > max) {
        max = matrix[k][j];
        maxArr = [k, j];
      }
    }
    if (i === maxArr[0]) result.push(matrix[i][j]);
  }
  return result;
};
// @lc code=end
