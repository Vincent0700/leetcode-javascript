/*
 * @lc app=leetcode.cn id=547 lang=javascript
 *
 * [547] 省份数量
 */

// @lc code=start
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
  let flag = [];
  let map = {};
  for (let i = 0; i < isConnected.length; ++i) {
    if (!flag[i]) {
      flag[i] = true;
      map[i] = [];
      let level = [i];
      while (level.length) {
        let newLevel = [];
        for (let t of level) {
          for (let j = i + 1; j < isConnected.length; ++j) {
            if (!flag[j] && isConnected[t][j]) {
              flag[j] = true;
              map[i].push(j);
              newLevel.push(j);
            }
          }
        }
        level = newLevel;
      }
    }
  }
  return Object.keys(map).length;
};
// @lc code=end

const isConnected = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1]
];
console.log(findCircleNum(isConnected));
