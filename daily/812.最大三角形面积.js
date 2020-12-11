/*
 * @lc app=leetcode.cn id=812 lang=javascript
 *
 * [812] 最大三角形面积
 */

// @lc code=start
function triArea(p1, p2, p3) {
  return Math.abs((p2[0] - p1[0]) * (p3[1] - p1[1]) - (p3[0] - p1[0]) * (p2[1] - p1[1])) / 2;
}
/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
  let maxArea = 0;
  for (let i = 0; i < points.length; ++i) {
    for (let j = i + 1; j < points.length; ++j) {
      for (let k = j + 1; k < points.length; ++k) {
        maxArea = Math.max(maxArea, triArea(points[i], points[j], points[k]));
      }
    }
  }
  return maxArea;
};
// @lc code=end
