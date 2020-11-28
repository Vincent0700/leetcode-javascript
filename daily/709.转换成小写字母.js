/*
 * @lc app=leetcode.cn id=709 lang=javascript
 *
 * [709] 转换成小写字母
 */

// @lc code=start
/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  const CODE_A = 'A'.charCodeAt(0);
  const CODE_Z = 'Z'.charCodeAt(0);
  const CODE_a = 'a'.charCodeAt(0);
  return str
    .split('')
    .map((c) => {
      const code = c.charCodeAt(0);
      return code >= CODE_A && code <= CODE_Z ? String.fromCharCode(code - CODE_A + CODE_a) : c;
    })
    .join('');
};
// @lc code=end

console.log(toLowerCase('Hello'));
