/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
function dp(arr, i, j) {
  if (arr[i][j]) return arr[i][j];
  arr[i][j] = dp(arr, i, j - 1) + dp(arr, i - 1, j);
  return arr[i][j];
}

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  const arr = Array(m)
    .fill(0)
    .map((t) => Array(n).fill(0));
  for (let t = 0; t < m; ++t) arr[t][0] = 1;
  for (let t = 0; t < n; ++t) arr[0][t] = 1;
  return dp(arr, m - 1, n - 1);
};
// @lc code=end

console.log(uniquePaths(7, 3));
