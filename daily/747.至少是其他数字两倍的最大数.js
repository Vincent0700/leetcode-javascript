/*
 * @lc app=leetcode.cn id=747 lang=javascript
 *
 * [747] 至少是其他数字两倍的最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
  let max = Math.max(...nums);
  let index = nums.indexOf(max);
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] !== max && max < 2 * nums[i]) index = -1;
  }
  return index;
};
// @lc code=end

console.log(dominantIndex([0, 0, 0, 1]));
