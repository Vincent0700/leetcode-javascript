/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  let i = 0;
  let j = -1;
  let count = 0;
  let dir = 'RIGHT';
  const flag = [];
  const result = [];
  for (let i = 0; i < m; ++i) {
    flag.push(Array(n).fill(true));
  }
  while (count < m * n) {
    if (dir === 'RIGHT') {
      if (j + 1 < n && flag[i][j + 1]) {
        result.push(matrix[i][j + 1]);
        flag[i][++j] = false;
        count++;
      } else dir = 'DOWN';
    } else if (dir === 'DOWN') {
      if (i + 1 < m && flag[i + 1][j]) {
        result.push(matrix[i + 1][j]);
        flag[++i][j] = false;
        count++;
      } else dir = 'LEFT';
    } else if (dir === 'LEFT') {
      if (j - 1 >= 0 && flag[i][j - 1]) {
        result.push(matrix[i][j - 1]);
        flag[i][--j] = false;
        count++;
      } else dir = 'UP';
    } else {
      if (i - 1 >= 0 && flag[i - 1][j]) {
        result.push(matrix[i - 1][j]);
        flag[--i][j] = false;
        count++;
      } else dir = 'RIGHT';
    }
  }
  return result;
};
// @lc code=end

const matrix = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
  [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
  [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
  [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
  [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
  [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
  [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
  [91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
];
console.log(spiralOrder(matrix));
