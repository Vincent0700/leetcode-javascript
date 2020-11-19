/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let count_zero = 0
  for (let i = nums.length - 1; i >= 0; --i) {
    const n = nums[i]
    if (!n) ++count_zero && nums.splice(i, 1)
  }
  nums.push(...Array(count_zero).fill(0))
};
// @lc code=end

const nums = [0,0,1]
moveZeroes(nums)
console.log(nums)