/*
 * @lc app=leetcode.cn id=905 lang=javascript
 *
 * [905] 按奇偶排序数组
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
  const odd = [];
  const result = [];
  A.forEach((a) => (a & 1 ? odd.push(a) : result.push(a)));
  return result.concat(odd);
};
// @lc code=end

console.log(sortArrayByParity([3, 1, 2, 4]));
