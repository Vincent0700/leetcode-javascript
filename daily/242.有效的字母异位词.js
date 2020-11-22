/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  const map = new Map();
  for (let c of s) {
    map.set(c, map.has(c) ? map.get(c) + 1 : 1);
  }
  for (let c of t) {
    if (!map.has(c)) return false;
    const count = map.get(c);
    if (count < 1) return false;
    else map.set(c, count - 1);
  }
  return true;
};
// @lc code=end

console.log(isAnagram('ab', 'a'));
