/*
 * @lc app=leetcode.cn id=908 lang=javascript
 *
 * [908] 最小差值 I
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeI = function(A, K) {
  const result = Math.max(...A) - Math.min(...A) - 2 * K;
  return Math.max(result, 0);
};
// @lc code=end

console.log(smallestRangeI([0, 10], 2));
