/*
 * @lc app=leetcode.cn id=973 lang=javascript
 *
 * [973] 最接近原点的 K 个点
 */

// @lc code=start

var D = (p) => p[0] * p[0] + p[1] * p[1];

/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
  return points.sort((a, b) => D(a) - D(b)).slice(0, K);
};
// @lc code=end
