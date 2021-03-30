/*
 * @lc app=leetcode.cn id=60 lang=javascript
 *
 * [60] 排列序列
 */

// @lc code=start
function fact(n) {
  return Array(n)
    .fill(0)
    .map((t, i) => i + 1)
    .reduce((acc, cur) => acc * cur, 1);
}
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  let str = '';
  const nums = Array(n)
    .fill(0)
    .map((t, i) => i + 1);
  for (let i = 1; i <= n; ++i) {
    const count = fact(n - i);
    const index = Math.ceil(k / count) - 1;
    const num = nums[index];
    nums.splice(nums.indexOf(num), 1);
    k -= index * count;
    str += num;
  }
  return str;
};
// @lc code=end

console.log(getPermutation(4, 9));
