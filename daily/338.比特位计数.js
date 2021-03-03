/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  const arr = [];
  for (let i = 0; i <= num; ++i) {
    arr.push(
      i
        .toString(2)
        .split('')
        .reduce((acc, cur) => acc + (cur === '1' ? 1 : 0), 0)
    );
  }
  return arr;
};
// @lc code=end
