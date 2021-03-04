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
    arr[i] = (arr[i >> 1] + i) & 1;
  }
  return arr;
};
// @lc code=end
