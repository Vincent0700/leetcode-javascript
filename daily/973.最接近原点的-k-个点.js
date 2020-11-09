/*
 * @lc app=leetcode.cn id=973 lang=javascript
 *
 * [973] 最接近原点的 K 个点
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
  let max = Number.MAX_SAFE_INTEGER;
  const arr = [];
  for (let pos of points) {
    if (arr.length < K) {
      arr.push({
        pos,
        dist: pos[0] * pos[0] + pos[1] * pos[1]
      });
      arr.sort((a, b) => a.dist - b.dist);
      max = arr[arr.length - 1].dist;
    } else {
      const dist = pos[0] * pos[0] + pos[1] * pos[1];
      if (dist < max) {
        arr.pop();
        arr.push({ pos, dist });
        arr.sort((a, b) => a.dist - b.dist);
        max = arr[arr.length - 1].dist;
      }
    }
  }
  return arr.map((t) => t.pos);
};
// @lc code=end
