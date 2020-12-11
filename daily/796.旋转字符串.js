/*
 * @lc app=leetcode.cn id=796 lang=javascript
 *
 * [796] 旋转字符串
 */

// @lc code=start
/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function(A, B) {
  if (A.length !== B.length) return false;
  if (A === B) return true;
  for (let i = 0; i < A.length; ++i) {
    A = A.slice(1) + A[0];
    if (A === B) return true;
  }
  return false;
};
// @lc code=end

console.log(rotateString('abcde', 'cdeab'));
