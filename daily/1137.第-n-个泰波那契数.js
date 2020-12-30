/*
 * @lc app=leetcode.cn id=1137 lang=javascript
 *
 * [1137] 第 N 个泰波那契数
 */

// @lc code=start
const arr = [0, 1, 1];
for (let i = 3; i < 38; ++i) {
  arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3];
}
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  return arr[n];
};
// @lc code=end
