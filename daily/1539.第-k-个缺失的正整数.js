/*
 * @lc app=leetcode.cn id=1539 lang=javascript
 *
 * [1539] 第 k 个缺失的正整数
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
  let i = 0;
  let j = 0;
  while (k) arr[i] === ++j ? ++i : k--;
  return j;
};
// @lc code=end

console.log(findKthPositive([2, 3, 4, 7, 11], 5));
