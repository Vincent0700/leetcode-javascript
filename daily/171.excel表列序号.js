/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel表列序号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  return s
    .split('')
    .reduce(
      (num, c, i) => num + 26 ** (s.length - 1 - i) * (c.charCodeAt() - 'A'.charCodeAt() + 1),
      0
    );
};
// @lc code=end

console.log(titleToNumber('ZY'));
