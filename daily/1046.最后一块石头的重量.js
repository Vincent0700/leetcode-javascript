/*
 * @lc app=leetcode.cn id=1046 lang=javascript
 *
 * [1046] 最后一块石头的重量
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  stones.sort((a, b) => b - a);
  while (stones.length > 1) {
    const x = stones[1];
    const y = stones[0];
    stones.splice(0, 2);
    const left = y - x;
    if (left > 0) {
      let flag = false;
      for (let i = 0; i < stones.length; ++i) {
        if (left >= stones[i]) {
          stones.splice(i, 0, left);
          flag = true;
          break;
        }
      }
      if (!flag) stones.push(left);
    }
  }
  return stones.length ? stones[0] : 0;
};
// @lc code=end
