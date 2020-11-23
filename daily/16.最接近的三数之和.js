/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  let minNum = Number.MAX_SAFE_INTEGER;
  let result = 0;
  for (let i = 0; i < nums.length; ++i) {
    for (let j = 0; j < nums.length; ++j) {
      for (let k = 0; k < nums.length; ++k) {
        if (i !== j && j !== k && i !== k) {
          const sum = nums[i] + nums[j] + nums[k];
          const delta = Math.abs(sum - target);
          if (delta < minNum) {
            minNum = delta;
            result = sum;
          }
        }
      }
    }
  }
  return result;
};
// @lc code=end
