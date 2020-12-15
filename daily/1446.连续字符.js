/*
 * @lc app=leetcode.cn id=1446 lang=javascript
 *
 * [1446] 连续字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
  let ch = '';
  let count = 0;
  let maxCount = 0;
  for (let c of s) {
    if (c === ch) count++;
    else {
      ch = c;
      count = 1;
    }
    maxCount = Math.max(count, maxCount);
  }
  return maxCount;
};
// @lc code=end
