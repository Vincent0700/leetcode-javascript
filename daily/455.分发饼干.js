/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let i = 0;
  let j = 0;
  let count = 0;
  while (i < g.length && j < s.length) {
    if (g[i] <= s[j]) ++count, ++i;
    ++j;
  }
  return count;
};
// @lc code=end

console.log(findContentChildren([10, 9, 8, 7], [5, 6, 7, 8]));
