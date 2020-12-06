/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const result = [];
  for (let n = 1; n <= numRows; ++n) {
    const arr = [];
    for (let i = 0; i < n; ++i)
      if (!i || i === n - 1) arr.push(1);
      else if (n > 1) arr.push(result[n - 2][i - 1] + result[n - 2][i]);
    result.push(arr);
  }
  return result;
};
// @lc code=end

console.log(generate(5));
