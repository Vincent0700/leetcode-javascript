/*
 * @lc app=leetcode.cn id=1408 lang=javascript
 *
 * [1408] 数组中的字符串匹配
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
  const result = new Set();
  for (let a of words) {
    for (let b of words) {
      if (a !== b && a.includes(b)) result.add(b);
    }
  }
  return [...result];
};
// @lc code=end
