/*
 * @lc app=leetcode.cn id=1496 lang=javascript
 *
 * [1496] 判断路径是否相交
 */

// @lc code=start
/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
  let pos = [0, 0];
  const dir = {
    N: [0, 1],
    S: [0, -1],
    W: [-1, 0],
    E: [1, 0]
  };
  const set = new Set([pos.join(',')]);
  for (let p of path.split('')) {
    pos = [pos[0] + dir[p][0], pos[1] + dir[p][1]];
    const point = pos.join(',');
    if (set.has(point)) return true;
    else set.add(point);
  }
  return false;
};
// @lc code=end

console.log(isPathCrossing('NES'));
