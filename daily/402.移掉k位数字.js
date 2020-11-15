/*
 * @lc app=leetcode.cn id=402 lang=javascript
 *
 * [402] 移掉K位数字
 */

// @lc code=start
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
  while(k--) {
    let min = num
    for(let i = 0; i < 10; ++i) {
      const newNum = num.replace(i, '')
      min = newNum.length < min.length || newNum < min ? newNum : min
    }
    num = min.replace(/^0/g, '')
  }
  return num && num !== 'NaN' ? num : '0'
};
// @lc code=end
