/*
 * @lc app=leetcode.cn id=1455 lang=javascript
 *
 * [1455] 检查单词是否为句中其他单词的前缀
 */

// @lc code=start
/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
  const list = sentence.split(' ');
  for (let i = 0; i < list.length; ++i) {
    if (list[i].indexOf(searchWord) === 0) return i + 1;
  }
  return -1;
};
// @lc code=end
