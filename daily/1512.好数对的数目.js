/*
 * @lc app=leetcode.cn id=1512 lang=javascript
 *
 * [1512] 好数对的数目
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; ++i)
    for (let j = i + 1; j < nums.length; ++j) if (nums[i] === nums[j]) count++;
  return count;
};
// @lc code=end

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
