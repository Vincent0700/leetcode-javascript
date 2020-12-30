/*
 * @lc app=leetcode.cn id=1668 lang=javascript
 *
 * [1668] 最大重复子字符串
 */

// @lc code=start
/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
  const len = word.length;
  let maxCount = 0;
  for (let i = 0; i < sequence.length; ++i) {
    if (sequence.slice(i, i + len) === word) {
      let count = 1;
      while (sequence.slice(i + len, i + 2 * len) === word) (i += len), ++count;
      maxCount = Math.max(maxCount, count);
    }
  }
  return maxCount;
};
// @lc code=end
