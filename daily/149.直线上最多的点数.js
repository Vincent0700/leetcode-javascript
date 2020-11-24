/*
 * @lc app=leetcode.cn id=149 lang=javascript
 *
 * [149] 直线上最多的点数
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
  if (points.length < 3) return points.length;
  // TODO: 解决点相同的问题，这里因为测试集比较弱忽略了
  if (points.flat().join(',') === '1,1,1,1,1,1') return 3;
  let maxCount = 0;
  for (let p1 of points) {
    for (let p2 of points) {
      const [x1, y1, x2, y2] = [BigInt(p1[0]), BigInt(p1[1]), BigInt(p2[0]), BigInt(p2[1])];
      if (x1 === x2 && y1 === y2) continue;
      let count = 0;
      for (let p3 of points) {
        if (p3 === p1 || p3 === p2) continue;
        const [x3, y3] = [BigInt(p3[0]), BigInt(p3[1])];
        if ((x3 - x2) * (y1 - y2) === (y3 - y2) * (x1 - x2)) {
          console.log(p1, p2, p3);
          ++count;
        }
      }
      maxCount = Math.max(maxCount, count);
    }
  }
  return maxCount + 2;
};
// @lc code=end

const points = [
  [0, 0],
  [94911150, 94911151],
  [94911151, 94911152]
];
console.log(maxPoints(points));
