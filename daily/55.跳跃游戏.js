/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  if (nums.length < 2) return true;
  const dp = Array(nums.length).fill(false);
  dp[0] = true;
  for (let i = 0; i < nums.length; ++i) {
    if (!dp[i]) return false;
    for (let j = 1; j <= nums[i]; ++j) {
      if (i + j < nums.length) {
        dp[i + j] = true;
      }
    }
  }
  return dp[nums.length - 1];
};
// @lc code=end

console.log(canJump([2, 0]));
