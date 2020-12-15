/*
 * @lc app=leetcode.cn id=1464 lang=javascript
 *
 * [1464] 数组中两元素的最大乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let max1 = 0;
  let max2 = 0;
  nums.forEach((n) => {
    if (n > max2) {
      if (n >= max1) [max1, max2] = [n, max1];
      else max2 = n;
    }
  });
  return (max1 - 1) * (max2 - 1);
};
// @lc code=end
