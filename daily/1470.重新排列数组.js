/*
 * @lc app=leetcode.cn id=1470 lang=javascript
 *
 * [1470] 重新排列数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
  const result = [];
  for (let i = 0; i < n; ++i) {
    result.push(nums[i], nums[i + n]);
  }
  return result;
};
// @lc code=end
