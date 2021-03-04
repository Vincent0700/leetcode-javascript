/*
 * @lc app=leetcode.cn id=354 lang=javascript
 *
 * [354] 俄罗斯套娃信封问题
 */

// @lc code=start
/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
  envelopes.sort((a, b) => a[0] - b[0]);
  const dp = Array(envelopes.length).fill(1);
  for (let i = 0; i < envelopes.length; ++i) {
    for (let j = 0; j < i; ++j) {
      if (envelopes[i][1] > envelopes[j][1] && envelopes[i][0] !== envelopes[j][0]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max(...dp);
};
// @lc code=end

// const arr = [[28,13],[23,29],[44,23],[31,39],[15,15],[6,40],[36,24],[37,32],[15,16],[27,47],[16,7],[31,16],[12,4],[12,25],[36,6],[31,11],[43,27],[37,33],[43,7],[45,39],[38,5],[14,6],[22,1],[19,28],[49,1],[15,16],[39,23],[47,40],[1,45],[33,26],[3,10],[18,21],[38,14],[23,8],[37,26],[12,26],[40,15],[10,33]]
// console.log(maxEnvelopes(arr));
