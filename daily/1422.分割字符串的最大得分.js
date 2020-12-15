/*
 * @lc app=leetcode.cn id=1422 lang=javascript
 *
 * [1422] 分割字符串的最大得分
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
  let lSum = 0;
  let rSum = s.split('').reduce((ac, v) => ac + (v === '1'), 0);
  let result = [rSum];
  for (let c of s) {
    lSum += c === '0';
    rSum -= c === '1';
    result.push(lSum + rSum);
  }
  return Math.max(...result.slice(1, result.length - 1));
};
// @lc code=end

console.log(maxScore('00111'));
