/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除排序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let cur = -1;
  let count = 0;
  let i = 0;
  while (i < nums.length) {
    if (cur !== nums[i]) {
      cur = nums[i];
      count = 1;
      i++;
    } else if (count < 2) {
      count++;
      i++;
    } else nums.splice(i, 1);
  }
};
// @lc code=end

const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
removeDuplicates(nums);
console.log(nums);
