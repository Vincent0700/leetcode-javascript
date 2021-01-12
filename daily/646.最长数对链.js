/*
 * @lc app=leetcode.cn id=646 lang=javascript
 *
 * [646] 最长数对链
 */

// @lc code=start
/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
  pairs.sort((a, b) => a[1] - b[1]);
  const dp = [1];
  for (let i = 1; i < pairs.length; ++i) {
    let flag = true;
    for (let j = i - 1; j >= 0; --j) {
      if (pairs[j][1] < pairs[i][0]) {
        dp[i] = Math.max(dp[j] + 1, dp[i - 1]);
        flag = false;
        break;
      }
    }
    if (flag) dp[i] = dp[i - 1];
  }
  return dp[pairs.length - 1];
};
// @lc code=end

console.log(
  findLongestChain([
    [1, 2],
    [2, 3],
    [3, 4]
  ])
);
