/*
 * @lc app=leetcode.cn id=1576 lang=javascript
 *
 * [1576] 替换所有的问号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function(s) {
  let str = s.split('');
  for (let i = 0; i < str.length; ++i) {
    if (str[i] === '?') {
      let left = i;
      let count = 1;
      let arr = 'abcdefghijklmnopqrstuvwxyz'.split('');
      if (i > 0) arr = arr.filter((v) => v !== str[i - 1]);
      while (s[i + 1] === '?') ++i, ++count;
      if (i < s.length - 1) arr = arr.filter((v) => v !== s[i + 1]);
      for (let j = 0; j < count; ++j) str[left + j] = arr[j % arr.length];
    }
  }
  return str.join('');
};
// @lc code=end

console.log(
  modifyString(
    '????????????????????????????????????????????????????????????????????????????????????????????????????'
  )
);
