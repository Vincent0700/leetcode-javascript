/*
 * @lc app=leetcode.cn id=1475 lang=javascript
 *
 * [1475] 商品折扣后的最终价格
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
  for (let i = 0; i < prices.length; ++i) {
    let discount = 0;
    for (let j = i + 1; j < prices.length; ++j) {
      if (prices[j] <= prices[i]) {
        discount = prices[j];
        break;
      }
    }
    prices[i] -= discount;
  }
  return prices;
};
// @lc code=end
