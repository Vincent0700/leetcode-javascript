/*
 * @lc app=leetcode.cn id=1004 lang=javascript
 *
 * [1004] 最大连续1的个数 III
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function(A, K) {
  let i = (j = 0);
  let count = A[0] ? 0 : 1;
  let maxLen = 0;
  while (++j < A.length) {
    if (!A[j]) count++;
    if (count <= K) maxLen = Math.max(maxLen, j - i + 1);
    else (i = A.indexOf(0, i) + 1), count--;
  }
  return maxLen;
};
// @lc code=end

const A = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1];
const K = 3;
console.log(longestOnes(A, K));
