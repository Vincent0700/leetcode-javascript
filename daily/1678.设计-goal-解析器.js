/*
 * @lc app=leetcode.cn id=1678 lang=javascript
 *
 * [1678] 设计 Goal 解析器
 */

// @lc code=start
/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
  return command.replace(/\(\)/g, 'o').replace(/\(al\)/g, 'al');
};
// @lc code=end
