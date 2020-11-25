/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// dp[i,j] = min { dp[i-1,j], dp[i,j-1] } + A[i,j]

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  const dp = grid.map(() => Array(n).fill(0));
  dp[0][0] = grid[0][0];
  let i = 0,
    j = 0;
  while (i < m && j < n) {
    for (let k = j + 1; k < n; ++k)
      dp[i][k] = Math.min(dp[i][k - 1], i >= 1 ? dp[i - 1][k] : 0x1fffffffffffff) + grid[i][k];
    for (let k = i + 1; k < m; ++k)
      dp[k][j] = Math.min(dp[k - 1][j], j >= 1 ? dp[k][j - 1] : 0x1fffffffffffff) + grid[k][j];
    if (i + 1 < m && j + 1 < n) {
      dp[++i][++j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    } else {
      break;
    }
  }
  return dp[m - 1][n - 1];
};
// @lc code=end

console.log(
  minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
  ])
);
