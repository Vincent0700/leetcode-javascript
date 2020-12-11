/*
 * @lc app=leetcode.cn id=1389 lang=javascript
 *
 * [1389] 按既定顺序创建目标数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
  const result = [];
  for (let i = 0; i < index.length; ++i) {
    result.splice(index[i], 0, nums[i]);
  }
  return result;
};
// @lc code=end
