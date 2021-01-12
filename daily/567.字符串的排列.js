/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  const m = s1.length;
  const s = s1
    .split('')
    .sort()
    .join('');
  for (let i = 0; i < s2.length - m + 1; ++i)
    if (
      s ===
      s2
        .slice(i, i + m)
        .split('')
        .sort()
        .join('')
    )
      return true;
  return false;
};
// @lc code=end

console.log(checkInclusion('ab', 'eidbaooo'));
