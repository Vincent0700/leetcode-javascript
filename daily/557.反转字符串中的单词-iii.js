/*
 * @lc app=leetcode.cn id=557 lang=javascript
 *
 * [557] 反转字符串中的单词 III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  return s
    .split(' ')
    .map((t) =>
      t
        .split('')
        .reverse()
        .join('')
    )
    .join(' ');
};
// @lc code=end

console.log(reverseWords("Let's take LeetCode contest"));
