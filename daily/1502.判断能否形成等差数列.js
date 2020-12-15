/*
 * @lc app=leetcode.cn id=1502 lang=javascript
 *
 * [1502] 判断能否形成等差数列
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
  arr.sort((a, b) => a - b);
  const delta = arr[1] - arr[0];
  for (let i = 1; i < arr.length; ++i) if (arr[i] - arr[i - 1] !== delta) return false;
  return true;
};
// @lc code=end

console.log(canMakeArithmeticProgression([1, 2, 4]));
