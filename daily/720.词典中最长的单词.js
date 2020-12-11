/*
 * @lc app=leetcode.cn id=720 lang=javascript
 *
 * [720] 词典中最长的单词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
  const obj = {};
  words.sort((a, b) => a.length - b.length);
  for (let s of words) {
    if (s.length === 1) {
      obj[s] = 1; // 1:默认可选 -1:不是叶子节点
    } else {
      const sub = s.slice(0, s.length - 1);
      if (obj[sub]) {
        obj[sub] = -1;
        obj[s] = 1;
      }
    }
  }
  const arr = Object.keys(obj)
    .filter((s) => obj[s] === 1)
    .sort((a, b) => (a.length !== b.length ? b.length - a.length : a > b ? 1 : -1));
  return arr.length ? arr[0] : '';
};
// @lc code=end

words = ['m', 'mo', 'moc', 'moch', 'mocha', 'l', 'la', 'lat', 'latt', 'latte', 'c', 'ca', 'cat'];
console.log(longestWord(words));
