/*
 * @lc app=leetcode.cn id=229 lang=javascript
 *
 * [229] 求众数 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  const a = nums.length / 3;
  const map = new Map();
  const result = [];
  nums.forEach((v) => {
    map.set(v, map.has(v) ? map.get(v) + 1 : 1);
  });
  map.forEach((v, k) => {
    if (v > a) result.push(k);
  });
  return result;
};
// @lc code=end
