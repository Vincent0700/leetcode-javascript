/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  const stack = [[0, T[0]]];
  const arr = Array(T.length).fill(0);
  for (let i = 1; i < T.length; ++i) {
    const [index, value] = stack[stack.length - 1];
  }
};
// @lc code=end
