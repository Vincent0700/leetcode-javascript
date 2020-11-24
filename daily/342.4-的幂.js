/*
 * @lc app=leetcode.cn id=342 lang=javascript
 *
 * [342] 4的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
  return (
    n
      .toString(4)
      .split('')
      .reduce((acc, n) => acc + parseInt(n), 0) === 1
  );
};
// @lc code=end
