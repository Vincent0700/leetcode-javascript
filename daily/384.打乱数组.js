/*
 * @lc app=leetcode.cn id=384 lang=javascript
 *
 * [384] 打乱数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.origin = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  return this.origin;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  const arr = [...this.origin];
  for (let i = 0; i < arr.length; ++i) {
    const rand = (Math.random() * arr.length) >> 0;
    [arr[i], arr[rand]] = [arr[rand], arr[i]];
  }
  return arr;
};
// @lc code=end
