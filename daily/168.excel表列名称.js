/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  let arr = [0, 27, 703, 18279, 475255, 12356631, 321272407, 8353082583];
  let t = arr.findIndex((v) => v > n);
  let str = '';
  while (t--) {
    const m = Math.floor(n / 26 ** t);
    if (m > 0) str += String.fromCharCode(m - 1 + 'A'.charCodeAt());
    else
      str =
        str.substr(0, str.length - 1) +
        String.fromCharCode(str[str.length - 1].charCodeAt() - 1) +
        'Z';
    n -= m * 26 ** t;
  }
  return str;
};
// @lc code=end

console.log(convertToTitle(52));
