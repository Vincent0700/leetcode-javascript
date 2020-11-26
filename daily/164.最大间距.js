/*
 * @lc app=leetcode.cn id=164 lang=javascript
 *
 * [164] 最大间距
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
  if (nums.length < 2) return 0;
  nums.sort((a, b) => a - b);
  let max = 0;
  for (let i = 1; i < nums.length; ++i) {
    const delta = nums[i] - nums[i - 1];
    max = Math.max(max, delta);
  }
  return max;
};
// @lc code=end
