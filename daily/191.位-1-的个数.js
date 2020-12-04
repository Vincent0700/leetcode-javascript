/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  return n
    .toString(2)
    .split('')
    .reduce((acc, cur) => (cur === '1' ? acc + 1 : acc), 0);
};
// @lc code=end
