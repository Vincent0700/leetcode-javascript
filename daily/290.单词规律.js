/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  let map = new Map();
  const arr = s.split(' ');
  if (arr.length !== pattern.length) return false;
  for (let i = 0; i < arr.length; ++i) {
    if (!map.has(pattern[i])) map.set(pattern[i], arr[i]);
    else if (map.get(pattern[i]) !== arr[i]) return false;
  }
  return new Set(map.values()).size === map.size;
};
// @lc code=end

console.log(wordPattern('jquery', 'jquery'));
