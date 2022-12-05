/*
 * @lc app=leetcode.cn id=587 lang=javascript
 *
 * [587] 安装栅栏
 */

// Graham 扫描法

// @lc code=start
function atan(p) {
  const angle = Math.atan(p[1] / p[0]);
  return angle > 0 ? angle : Math.PI / 2 - angle;
}

/**
 * @param {number[][]} points
 * @return {number[][]}
 */
var outerTrees = function(points) {
  const stack = [];
  // 寻找 y 值最低的点 P0
  let index = -1;
  let minY = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < points.length; ++i) {
    const y = points[i][1];
    if (y < minY) {
      index = i;
      minY = y;
    }
  }
  const p0 = points[index];
  stack.push(p0);
  points.splice(index, 1);
  // 偏移坐标系
  points.forEach((p) => {
    p[0] -= p0[0];
    p[1] -= p0[1];
  });
  // 按照和 P0 角度排序
  points.sort((p1, p2) => atan(p1) - atan(p2));
  // P1 压栈
  stack.push(points[0]);
  points.splice(0, 1);

  console.log(p0, points);
};
// @lc code=end

const points = [
  [1, 1],
  [2, 2],
  [2, 0],
  [2, 4],
  [3, 3],
  [4, 2]
];
console.log(outerTrees(points));
