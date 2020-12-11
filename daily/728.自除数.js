/*
 * @lc app=leetcode.cn id=728 lang=javascript
 *
 * [728] 自除数
 */

// @lc code=start
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
  const result = [];
  for (let n = left; n <= right; ++n) {
    let flag = true;
    let arr = n
      .toString()
      .split('')
      .map((t) => parseInt(t));
    for (let t of arr) {
      if (t === 0) {
        flag = false;
        break;
      } else if (n % t) {
        flag = false;
        break;
      }
    }
    if (flag) result.push(n);
  }
  return result;
};
// @lc code=end
