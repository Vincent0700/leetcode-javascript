/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let i = 1,
    j = numbers.length;
  while (i < j) {
    const sum = numbers[i - 1] + numbers[j - 1];
    if (sum === target) return [i, j];
    else if (sum > target) j--;
    else i++;
  }
};
// @lc code=end

console.log(twoSum([2, 7, 11, 15], 9));
