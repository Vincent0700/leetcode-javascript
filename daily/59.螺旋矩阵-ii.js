/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  let i = 0;
  let j = -1;
  let count = 0;
  let dir = 'RIGHT';
  const flag = [];
  const result = [];
  for (let i = 0; i < n; ++i) {
    flag.push(Array(n).fill(true));
    result.push(Array(n).fill(0));
  }
  while (count < n * n) {
    if (dir === 'RIGHT') {
      if (j + 1 < n && flag[i][j + 1]) {
        result[i][++j] = ++count;
        flag[i][j] = false;
      } else dir = 'DOWN';
    } else if (dir === 'DOWN') {
      if (i + 1 < n && flag[i + 1][j]) {
        result[++i][j] = ++count;
        flag[i][j] = false;
      } else dir = 'LEFT';
    } else if (dir === 'LEFT') {
      if (j - 1 >= 0 && flag[i][j - 1]) {
        result[i][--j] = ++count;
        flag[i][j] = false;
      } else dir = 'UP';
    } else {
      if (i - 1 >= 0 && flag[i - 1][j]) {
        result[--i][j] = ++count;
        flag[i][j] = false;
      } else dir = 'RIGHT';
    }
  }
  return result;
};
// @lc code=end

console.log(generateMatrix(3));
