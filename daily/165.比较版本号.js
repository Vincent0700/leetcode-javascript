/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  const a = version1.split('.').map((t) => parseInt(t));
  const b = version2.split('.').map((t) => parseInt(t));
  let i = 0;
  let j = 0;
  while (i < a.length && j < b.length) {
    if (a[i] > b[i]) return 1;
    else if (a[i] < b[i]) return -1;
    else i++, j++;
  }
  if (i < a.length) return a.slice(i).reduce((acc, cur) => acc + cur) > 0 ? 1 : 0;
  if (j < b.length) return b.slice(i).reduce((acc, cur) => acc + cur) > 0 ? -1 : 0;
  return 0;
};
// @lc code=end

console.log(compareVersion('1.0', '1.0.0'));
