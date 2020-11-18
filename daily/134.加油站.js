/*
 * @lc app=leetcode.cn id=134 lang=javascript
 *
 * [134] 加油站
 */

// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  let total = 0
  let dist = 0
  let start = 0
  for (let i = 0; i < gas.length; ++i) {
    const delta = gas[i] - cost[i]
    dist += delta
    total += delta
    if (dist < 0) {
      dist = 0
      start = i + 1
    }
  }
  return total < 0 ? -1 : start
};
// @lc code=end

const gas = [5,8,2,8]
const cost = [6,5,6,6]
console.log(canCompleteCircuit(gas, cost))