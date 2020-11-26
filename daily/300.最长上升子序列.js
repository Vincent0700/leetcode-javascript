/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长上升子序列
 */

// dp[i] = max { 1, max { dp[j] + 1 } }

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  if (nums.length < 2) return nums.length;
  const dp = [1];
  for (let i = 1; i < nums.length; ++i) {
    let maxJ = -1;
    for (let j = 0; j < i; ++j) {
      if (nums[j] < nums[i] && (!~maxJ || dp[j] > dp[maxJ])) maxJ = j;
    }
    dp[i] = !~maxJ ? 1 : dp[maxJ] + 1;
  }
  return Math.max(...dp);
};
// @lc code=end
