/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start

var getPalindrome = function(s, i) {
  let l = i,
    r = i;
  while (l - 1 >= 0 && r + 1 < s.length && s[l - 1] === s[r + 1]) l--, r++;
  let s1 = s.slice(l, r + 1);
  if (i + 1 < s.length && s[i] === s[i + 1]) {
    (l = i), (r = i + 1);
    while (l - 1 >= 0 && r + 1 < s.length && s[l - 1] === s[r + 1]) l--, r++;
    const s2 = s.slice(l, r + 1);
    if (s2.length > s1.length) s1 = s2;
  }
  return s1;
};

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let maxStr = '';
  for (let i = 0; i < s.length; ++i) {
    const substr = getPalindrome(s, i);
    if (substr.length > maxStr.length) {
      maxStr = substr;
    }
  }
  return maxStr;
};
// @lc code=end

console.log(longestPalindrome('cbbd'));
