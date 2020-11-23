/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  const arr = [...new Set(nums.sort((a, b) => a - b))];
  let max = 0;
  for (let i = 0; i < arr.length; ++i) {
    let count = 1;
    while (arr[i + 1] - arr[i] === 1) i++, count++;
    max = Math.max(max, count);
  }
  return max;
};
// @lc code=end

const nums = [0];
console.log(longestConsecutive(nums));
