/*
 * @lc app=leetcode.cn id=507 lang=javascript
 *
 * [507] 完美数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
  if (num === 1) return false;
  const factors = new Set();
  for (let x = 2; x <= Math.sqrt(num); ++x) {
    if (num % x === 0) {
      factors.add(x);
      factors.add(num / x);
    }
  }
  return num === [1, ...factors].reduce((acc, cur) => cur + acc, 0);
};
// @lc code=end

console.log(checkPerfectNumber(1));
