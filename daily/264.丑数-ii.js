/*
 * @lc app=leetcode.cn id=264 lang=javascript
 *
 * [264] 丑数 II
 */

// @lc code=start
const arr = [1];

for (let i = 0; i < 100; ++i) {
  let a = 5 ** i;
  if (a > 2123366400) break;
  for (let j = 0; j < 100; ++j) {
    let b = a * 3 ** j;
    if (b > 2123366400) break;
    for (let k = 0; k < 100; ++k) {
      const c = b * 2 ** k;
      if (c > 2123366400) break;
      arr.push(c);
    }
  }
}

arr.sort((a, b) => a - b);

/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  return arr[n];
};
// @lc code=end

console.log(nthUglyNumber(1690));
