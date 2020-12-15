/*
 * @lc app=leetcode.cn id=1550 lang=javascript
 *
 * [1550] 存在连续三个奇数的数组
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
  for (let i = 2; i < arr.length; i++)
    if (arr[i - 2] & 1 && arr[i - 1] & 1 && arr[i] & 1) return true;
  return false;
};
// @lc code=end

console.log(threeConsecutiveOdds([1, 2, 34, 3, 4, 5, 7, 23, 12]));
