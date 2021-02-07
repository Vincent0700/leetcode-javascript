/*
 * @lc app=leetcode.cn id=665 lang=javascript
 *
 * [665] 非递减数列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
  let index = -1;
  let flag = false;
  for (let i = 0; i < nums.length - 1; ++i) {
    const n = nums[i + 1] - nums[i];
    if (flag && n < 0) return false;
    if (n < 0) (flag = true), (index = i);
  }
  return (
    index <= 0 ||
    index === nums.length - 2 ||
    nums[index - 1] <= nums[index + 1] ||
    nums[index] <= nums[index + 2]
  );
};
// @lc code=ends

nums = [5, 7, 1, 8];
console.log(checkPossibility(nums));
