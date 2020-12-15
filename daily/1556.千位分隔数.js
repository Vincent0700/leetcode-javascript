/*
 * @lc app=leetcode.cn id=1556 lang=javascript
 *
 * [1556] 千位分隔数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
  const arr = n.toString().split('');
  for (let i = arr.length - 3; i >= 1; i -= 3) arr.splice(i, 0, '.');
  return arr.join('');
};
// @lc code=end

console.log(thousandSeparator(123456789));
