/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
function range(start, end, step = 1) {
  const arr = [];
  if (end > start) for (let i = start; i < end; i += step) arr.push(i);
  else for (let i = start; i > end; i -= step) arr.push(i);
  return arr;
}
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  let n = 0;
  const len = s.length;
  const arr = [];
  const list = [];

  range(0, numRows).forEach((i) => {
    arr.push([]);
    list.push(i);
  });

  if (numRows > 2) {
    list.push(...range(numRows - 2, 0));
  }

  while (n < len) {
    for (let t of list) {
      if (n < len) arr[t].push(s[n++]);
      else break;
    }
  }

  return arr.map((t) => t.join('')).join('');
};
// @lc code=end

console.log(convert('AB', 1));
