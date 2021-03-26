/*
 * @lc app=leetcode.cn id=1460 lang=javascript
 *
 * [1460] 通过翻转子数组使两个数组相等
 */

// @lc code=start
/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
  const a = [];
  for (let t of arr) {
    if (!a[t]) a[t] = 1;
    else a[t]++;
  }
  for (let t of target) {
    if (a[t]) a[t]--;
    else return false;
  }
  return true;
};
// @lc code=end
