/*
 * @lc app=leetcode.cn id=452 lang=javascript
 *
 * [452] 用最少数量的箭引爆气球
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
  let count = 0
  points.sort((a, b) => a[1] - b[1])
  for (let i = 0; i < points.length; ++i) {
    const p = points[i]
    while (i + 1 < points.length && points[i+1][0] <= p[1]) i++
    count++
  }
  return count
};
// @lc code=end

const points = [[1,2],[2,3],[3,4],[4,5]]
console.log(findMinArrowShots(points))