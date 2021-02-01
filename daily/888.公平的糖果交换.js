/*
 * @lc app=leetcode.cn id=888 lang=javascript
 *
 * [888] 公平的糖果交换
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
  const sumA = A.reduce((acc, n) => acc + n, 0);
  const sumB = B.reduce((acc, n) => acc + n, 0);
  const delta = ((sumA + sumB) >> 1) - sumA;
  for (const n of A) {
    if (B.includes(n + delta)) return [n, n + delta];
  }
};
// @lc code=end

const A = [1, 2, 5];
const B = [2, 4];
console.log(fairCandySwap(A, B));
