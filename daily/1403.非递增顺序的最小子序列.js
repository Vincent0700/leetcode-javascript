/*
 * @lc app=leetcode.cn id=1403 lang=javascript
 *
 * [1403] 非递增顺序的最小子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
  nums.sort((a, b) => b - a);
  const result = [];
  let rSum = nums.reduce((acc, cur) => acc + cur, 0);
  let lSum = 0;
  for (let n of nums) {
    lSum += n;
    rSum -= n;
    result.push(n);
    if (lSum > rSum) break;
  }
  return result;
};
// @lc code=end

console.log(minSubsequence([4, 4, 7, 6, 7]));
