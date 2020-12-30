/*
 * @lc app=leetcode.cn id=1089 lang=javascript
 *
 * [1089] 复写零
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
  const len = arr.length;
  for (let i = 0; i < arr.length; ++i) if (!arr[i]) arr.splice(i++, 0, 0);
  arr.splice(len, arr.length);
};
// @lc code=end

const arr = [1, 0, 2, 3, 0, 4, 5, 0];
duplicateZeros(arr);
console.log(arr);
