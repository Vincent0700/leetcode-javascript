/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  const map = new Map();
  const a = s.split('');
  const b = t.split('');
  for (let i = 0; i < a.length; ++i) {
    if (!map.has(a[i])) {
      let flag = true;
      map.forEach((v) => {
        if (v === b[i]) flag = false;
      });
      if (flag) map.set(a[i], b[i]);
      else return false;
    } else if (map.get(a[i]) !== b[i]) return false;
  }
  return true;
};
// @lc code=end
