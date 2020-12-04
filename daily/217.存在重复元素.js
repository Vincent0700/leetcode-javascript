/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const map = new Map();
  nums.forEach((v) => {
    if (map.has(v)) map.set(v, map.get(v) + 1);
    else map.set(v, 1);
  });
  let flag = false;
  map.forEach((v) => {
    if (v > 1) flag = true;
  });
  return flag;
};
// @lc code=end

console.log(containsDuplicate([1, 2, 3, 1]));
