/*
 * @lc app=leetcode.cn id=1413 lang=javascript
 *
 * [1413] 逐步求和得到正数的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
  const arr = [];
  nums.reduce((acc, cur) => {
    arr.push(acc + cur);
    return acc + cur;
  }, 0);
  const min = Math.min(...arr);
  return min >= 1 ? 1 : 1 - min;
};
// @lc code=end

console.log(minStartValue([-3, 2, -3, 4, 2]));
