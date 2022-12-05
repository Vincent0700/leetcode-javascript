/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if (nums.length === 1) return nums[0];
  let dp = [nums[0] > 0 ? nums[0] : 0];
  for (let i = 1; i < nums.length; ++i) {
    dp[i] = Math.max(dp[i - 1] + nums[i], 0);
  }
  return Math.max(...dp);
};
// @lc code=end
