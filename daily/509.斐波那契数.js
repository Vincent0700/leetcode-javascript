/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
const dp = [0, 1];

/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  for (let i = dp.length; i <= N; ++i) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[N];
};
// @lc code=end
