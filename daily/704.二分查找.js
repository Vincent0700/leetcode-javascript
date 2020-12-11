/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    const mid = (start + end) >> 1;
    if (nums[mid] < target) start = mid + 1;
    else if (nums[mid] > target) end = mid - 1;
    else return mid;
  }
  return -1;
};
// @lc code=end

console.log(search([1, 2, 3, 5, 9], 9));
