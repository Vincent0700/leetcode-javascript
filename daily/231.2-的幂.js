/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  return (
    n
      .toString(2)
      .split('')
      .reduce((acc, n) => acc + parseInt(n), 0) === 1
  );
};
// @lc code=end

console.log(isPowerOfTwo(1));
