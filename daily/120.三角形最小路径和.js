/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// dp[i][j] 表示第 i 行第 j 列的最短距离
// dp[i][j] = Min(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j]

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  const dp = [[triangle[0][0]]];
  for (let i = 1; i < triangle.length; ++i) {
    dp.push(Array(i + 1).fill(0));
    dp[i][0] = dp[i - 1][0] + triangle[i][0];
    dp[i][i] = dp[i - 1][i - 1] + triangle[i][i];
    for (let j = 1; j < i; ++j) {
      dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j];
    }
  }
  return Math.min(...dp[triangle.length - 1]);
};
// @lc code=end

const triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];
console.log(minimumTotal(triangle));
