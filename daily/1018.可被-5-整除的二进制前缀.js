/*
 * @lc app=leetcode.cn id=1018 lang=javascript
 *
 * [1018] 可被 5 整除的二进制前缀
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(A) {
  const arr = [];
  let sum = 0;
  for (let i = 0; i < A.length; ++i) {
    sum = ((sum << 1) + A[i]) % 5;
    arr.push(sum === 0);
  }
  return arr;
};
// @lc code=end

console.log(prefixesDivBy5([0, 1, 1]));
