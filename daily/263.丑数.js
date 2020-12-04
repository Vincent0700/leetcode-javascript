/*
 * @lc app=leetcode.cn id=263 lang=javascript
 *
 * [263] 丑数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
  if (num <= 0) return false;
  while (!(num % 5)) num /= 5;
  while (!(num % 3)) num /= 3;
  while (!(num & 1)) num /= 2;
  return num === 1;
};
// @lc code=end

console.log(isUgly(-2147483648));
