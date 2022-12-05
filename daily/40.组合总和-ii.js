/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

const fn = (arr, target) => {};

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  const map = [];
  for (let t of candidates) {
    map[t] = target - t;
  }
};
// @lc code=end
