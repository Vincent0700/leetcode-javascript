/*
 * @lc app=leetcode.cn id=1619 lang=javascript
 *
 * [1619] 删除某些元素后的数组均值
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
  arr.sort((a, b) => a - b);
  const t = Math.floor(arr.length * 0.05);
  const a = arr.slice(t, arr.length - t);
  return a.reduce((acc, cur) => acc + cur, 0) / a.length;
};
// @lc code=end

const arr = [
  6,
  0,
  7,
  0,
  7,
  5,
  7,
  8,
  3,
  4,
  0,
  7,
  8,
  1,
  6,
  8,
  1,
  1,
  2,
  4,
  8,
  1,
  9,
  5,
  4,
  3,
  8,
  5,
  10,
  8,
  6,
  6,
  1,
  0,
  6,
  10,
  8,
  2,
  3,
  4
];
console.log(trimMean(arr));
