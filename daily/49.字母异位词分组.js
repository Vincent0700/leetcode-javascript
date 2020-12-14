/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const obj = [];
  const arr = strs.map((word) => [
    word,
    word
      .split('')
      .sort()
      .join('')
  ]);
  arr.forEach((a) => {
    if (a[1] in obj) obj[a[1]].push(a[0]);
    else obj[a[1]] = [a[0]];
  });
  return Object.values(obj);
};
// @lc code=end

const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
console.log(groupAnagrams(strs));
