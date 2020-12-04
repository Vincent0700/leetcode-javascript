/*
 * @lc app=leetcode.cn id=190 lang=javascript
 *
 * [190] 颠倒二进制位
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  return parseInt(
    n
      .toString(2)
      .split('')
      .reverse()
      .join('')
      .padEnd(32, '0'),
    2
  );
};
// @lc code=end

const num = '00000010100101000001111010011100';
const n = parseInt(num, 2);
console.log(n, reverseBits(n));
