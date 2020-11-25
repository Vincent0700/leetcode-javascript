/*
 * @lc app=leetcode.cn id=1370 lang=javascript
 *
 * [1370] 上升下降字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
  const len = s.length;
  const arr = s.split('');
  const map = {};
  for (let c of arr) map[c] = map[c] ? map[c] + 1 : 1;
  let keys = Object.keys(map).sort();
  keys = [...keys, ...keys.reverse()];
  let i = 0;
  let str = '';
  for (let t = 0; t < len; ++t) {
    map[keys[i]]--;
    str += keys[i];
    if (t < len - 1) {
      do {
        i = (i + 1) % keys.length;
      } while (!map[keys[i]]);
    }
  }
  return str;
};
// @lc code=end

console.log(sortString('aaaabbbbcccc'));
