/*
 * @lc app=leetcode.cn id=1417 lang=javascript
 *
 * [1417] 重新格式化字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {
  let a = [];
  let b = [];
  let result = [];
  s.split('').forEach((c) => {
    isNaN(c) ? b.push(c) : a.push(c);
  });
  if (Math.abs(a.length - b.length) > 1) return '';
  else {
    let i = 0;
    let j = 0;
    if (b.length > a.length) [a, b] = [b, a];
    while (i < a.length && j < b.length) {
      result.push(a[i++]);
      result.push(b[j++]);
    }
    if (i < a.length) result.push(a[i]);
  }
  return result.join('');
};
// @lc code=end

console.log(reformat('covid2019'));
