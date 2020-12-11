/*
 * @lc app=leetcode.cn id=1374 lang=javascript
 *
 * [1374] 生成每种字符都是奇数个的字符串
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
  if (n & 1)
    return Array(n)
      .fill('a')
      .join('');
  else
    return Array(n - 1)
      .fill('a')
      .concat('b')
      .join('');
};
// @lc code=end
