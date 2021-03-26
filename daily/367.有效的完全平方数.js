/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
const arr = [];
for (let i = 1; i <= 46340; ++i) {
  arr.push(i ** 2);
}
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  return arr.includes(num);
};
// @lc code=end
