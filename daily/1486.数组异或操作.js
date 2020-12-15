/*
 * @lc app=leetcode.cn id=1486 lang=javascript
 *
 * [1486] 数组异或操作
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
  return Array(n)
    .fill(0)
    .map((t, i) => start + 2 * i)
    .reduce((acc, cur) => acc ^ cur, 0);
};
// @lc code=end

console.log(xorOperation(10, 5));
