/*
 * @lc app=leetcode.cn id=258 lang=javascript
 *
 * [258] 各位相加
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  while (num > 9)
    num = num
      .toString()
      .split('')
      .reduce((acc, cur) => acc + parseInt(cur), 0);
  return num;
};
// @lc code=end
