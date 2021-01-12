/*
 * @lc app=leetcode.cn id=593 lang=javascript
 *
 * [593] 有效的正方形
 */

// @lc code=start
const equal = (p1, p2) => {
  return p1[0] === p2[0] && p1[1] === p2[1];
};
const calc = (p1, p2) => {
  return (p1[0] - p2[0]) ** 2 + (p1[1] - p2[1]) ** 2;
};
/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function(p1, p2, p3, p4) {
  if (
    equal(p1, p2) ||
    equal(p1, p3) ||
    equal(p1, p4) ||
    equal(p2, p3) ||
    equal(p2, p4) ||
    equal(p3, p4)
  )
    return false;
  let points = [p2, p3, p4];
  let arr = points.map((p) => [calc(p1, p), p]).sort((a, b) => a[0] - b[0]);
  if (arr[0][0] !== arr[1][0] || arr[2][0] !== 2 * arr[0][0]) return false;
  let tmp = [calc(arr[2][1], arr[0][1]), calc(arr[2][1], arr[1][1])];
  return tmp[0] === tmp[1] && tmp[0] === arr[0][0];
};
// @lc code=end

console.log(validSquare([0, 1], [1, 1], [1, 1], [1, 0]));
