/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  if (k === 1) return s;
  const arr = [];
  let i = -1;
  while (i < s.length) {
    let count = k;
    let str = [];
    while (count-- && i < s.length) str.push(s[++i]);
    arr.push(str.reverse().join(''));
    if (i >= s.length - 1) break;
    count = k;
    str = [];
    while (count-- && i < s.length) str.push(s[++i]);
    arr.push(str.join(''));
  }
  return arr.join('');
};
// @lc code=end
