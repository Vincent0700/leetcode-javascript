/*
 * @lc app=leetcode.cn id=658 lang=javascript
 *
 * [658] 找到 K 个最接近的元素
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
  return arr
    .sort((a, b) => Math.abs(a - x) - Math.abs(b - x) || a - b)
    .slice(0, k)
    .sort((a, b) => a - b);
};
// @lc code=end
