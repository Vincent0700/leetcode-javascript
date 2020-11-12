/*
 * @lc app=leetcode.cn id=922 lang=javascript
 *
 * [922] 按奇偶排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
  let res = Array(A.length);
  let i = 0, j = 0;
  for (let n of A)
    n % 2 ? (res[i++ * 2 + 1] = n) : (res[j++ * 2] = n);
  return res;
};
// @lc code=end
