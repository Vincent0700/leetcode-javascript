/*
 * @lc app=leetcode.cn id=1672 lang=javascript
 *
 * [1672] 最富有客户的资产总量
 */

// @lc code=start
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
  const a = new Map();
  for (let i = 0; i < accounts.length; ++i) {
    for (let j = 0; j < accounts[0].length; ++j) {
      if (!a.has(i)) a.set(i, accounts[i][j]);
      else a.set(i, a.get(i) + accounts[i][j]);
    }
  }
  return Math.max(...[...a].map((t) => t[1]));
};
// @lc code=end
