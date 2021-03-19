/*
 * @lc app=leetcode.cn id=661 lang=javascript
 *
 * [661] 图片平滑器
 */

// @lc code=start
/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function(M) {
  const [m, n] = [M.length, M[0].length];
  const mat = [];
  for (let i = 0; i < m; ++i) {
    mat.push([]);
    for (let j = 0; j < n; ++j) {
      const arr = [];
      const list = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1], [0, 0], [0, 1],
        [1, -1], [1, 0], [1, 1]
      ];
      list.forEach((t) => {
        const [x, y] = [i + t[0], j + t[1]];
        if (x >= 0 && x < m && y >= 0 && y < n) arr.push(M[x][y]);
      });
      const avr = Math.floor(arr.reduce((acc, cur) => acc + cur, 0) / arr.length);
      mat[i].push(avr);
    }
  }
  return mat;
};
// @lc code=end

const M = [
  [2, 3, 4],
  [5, 6, 7],
  [8, 9, 10],
  [11, 12, 13],
  [14, 15, 16]
];
console.log(imageSmoother(M));
