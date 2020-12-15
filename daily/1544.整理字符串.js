/*
 * @lc app=leetcode.cn id=1544 lang=javascript
 *
 * [1544] 整理字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
  const arr = s.split('');
  let i = 0;
  while (i + 1 < arr.length) {
    if (Math.abs(arr[i].charCodeAt() - arr[i + 1].charCodeAt()) === 32) {
      arr.splice(i, 2);
      if (i - 1 >= 0) i--;
    } else i++;
  }
  return arr.join('');
};
// @lc code=end

console.log(makeGood('abBAcC'));
