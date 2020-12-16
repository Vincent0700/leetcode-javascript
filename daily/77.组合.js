/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
var fn = (n, k, start, arr, result) => {
  if (!k) result.push([...arr]);
  else
    for (let i = start; i <= n; ++i) {
      fn(n, k - 1, i + 1, [...arr, i], result);
    }
};
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  if (!n || !k) return [];
  const result = [];
  fn(n, k, 1, [], result);
  return result;
};
// @lc code=end

console.log(combine(4, 2));
