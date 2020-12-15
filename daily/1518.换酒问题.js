/*
 * @lc app=leetcode.cn id=1518 lang=javascript
 *
 * [1518] 换酒问题
 */

// @lc code=start
/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
  let empty = 0;
  let count = 0;
  while (numBottles > 0) {
    console.log(numBottles);
    count += numBottles;
    empty += numBottles;
    numBottles = Math.floor(empty / numExchange);
    empty -= numBottles * numExchange;
  }
  return count;
};
// @lc code=end

console.log(numWaterBottles(5, 5));
