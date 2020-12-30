/*
 * @lc app=leetcode.cn id=1154 lang=javascript
 *
 * [1154] 一年中的第几天
 */

// @lc code=start
/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
  const d = new Date(date);
  return (d.getTime() - new Date(`${d.getFullYear()}-01-01`)) / 86400000 + 1;
};
// @lc code=end

console.log(dayOfYear('2004-03-01'));
