/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */

// @lc code=start

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  const arr = [];
  for (let i = 2; i < n; ++i) arr[i] = true;
  for (let i = 2; i < Math.sqrt(n); i++)
    if (arr[i]) for (let j = i; i * j <= n; ++j) arr[i * j] = false;
  return arr.reduce((acc, cur) => acc + (cur ? 1 : 0), 0);
};
// @lc code=end

console.log(countPrimes(10));
