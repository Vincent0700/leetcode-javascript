/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  const map = new Map();
  nums.forEach((v, i) => {
    if (map.has(v)) map.get(v).push(i);
    else map.set(v, [i]);
  });
  let flag = false;
  map.forEach((v) => {
    if (v.length > 1) {
      let min = v[1] - v[0];
      for (let i = 1; i < v.length; ++i) min = Math.min(v[i] - v[i - 1], min);
      if (min <= k) flag = true;
    }
  });
  return flag;
};
// @lc code=end

console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
