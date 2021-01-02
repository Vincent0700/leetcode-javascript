/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
var fn = (s) => {
  let arr = [];
  for (let c of s)
    if (c !== '#') arr.push(c);
    else if (arr.length > 0) arr.splice(arr.length - 1, 1);
  return arr.join('');
};
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
  return fn(S) === fn(T);
};
// @lc code=end
