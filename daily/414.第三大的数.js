/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  nums = [...new Set(nums)];
  if (nums.length < 3) return Math.max(...nums);
  return nums.sort((a, b) => b - a)[2];
};
// @lc code=end
