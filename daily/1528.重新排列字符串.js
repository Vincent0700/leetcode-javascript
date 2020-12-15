/*
 * @lc app=leetcode.cn id=1528 lang=javascript
 *
 * [1528] 重新排列字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
  return s
    .split('')
    .map((t, i) => [indices[i], t])
    .sort((a, b) => a[0] - b[0])
    .map((t) => t[1])
    .join('');
};
// @lc code=end
