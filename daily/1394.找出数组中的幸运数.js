/*
 * @lc app=leetcode.cn id=1394 lang=javascript
 *
 * [1394] 找出数组中的幸运数
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
  const map = new Map();
  const result = [];
  for (let n of arr) {
    map.set(n, map.has(n) ? map.get(n) + 1 : 1);
  }
  map.forEach((v, k) => {
    if (v === k) result.push(v);
  });
  return !result.length ? -1 : Math.max(...result);
};
// @lc code=end
