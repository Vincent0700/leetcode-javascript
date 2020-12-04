/*
 * @lc app=leetcode.cn id=228 lang=javascript
 *
 * [228] 汇总区间
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  if (nums.length === 0) return [];
  if (nums.length === 1) return [nums[0].toString()];
  let start = nums[0];
  let end = nums[0];
  const result = [];
  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] - nums[i - 1] === 1) end++;
    else {
      if (start === end) result.push(start.toString());
      else result.push(`${start}->${end}`);
      start = nums[i];
      end = nums[i];
    }
  }
  if (start === end) result.push(start.toString());
  else result.push(`${start}->${end}`);
  return result;
};
// @lc code=end
