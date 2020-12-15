/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort((a, b) => (a[1] !== b[1] ? a[1] - b[1] : a[0] - b[0]));
  let i = 1;
  while (i < intervals.length) {
    if (intervals[i - 1][0] >= intervals[i][0]) {
      intervals[i - 1] = null;
      intervals.splice(--i, 1);
    } else if (intervals[i - 1][1] >= intervals[i][0]) {
      intervals[i] = [intervals[i - 1][0], intervals[i][1]];
      intervals[i - 1] = null;
      intervals.splice(--i, 1);
    } else i++;
    if (!i) i++;
  }
  return intervals.filter((t) => t);
};
// @lc code=end

const intervals = [
  [1, 4],
  [0, 2],
  [3, 5]
];
console.log(merge(intervals));
