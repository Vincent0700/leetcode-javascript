/*
 * @lc app=leetcode.cn id=1030 lang=javascript
 *
 * [1030] 距离顺序排列矩阵单元格
 */

// @lc code=start
/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var allCellsDistOrder = function(R, C, r0, c0) {
  const result = []
  const calc = (a) => Math.abs(a[0] - r0) + Math.abs(a[1] - c0)
  for(let r = 0; r < R; ++r)
    for(let c = 0; c < C; ++c)
      result.push([r, c])
  return result.sort((a, b) => calc(a) - calc(b))
};
// @lc code=end

