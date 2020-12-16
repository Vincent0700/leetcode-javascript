/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const map = new Map();
  for (let n of nums) map.set(n, map.has(n) ? map.get(n) + 1 : 1);
  return [...map]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((t) => t[0]);
};
// @lc code=end
