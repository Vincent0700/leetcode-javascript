/*
 * @lc app=leetcode.cn id=932 lang=javascript
 *
 * [932] 漂亮数组
 */

// @lc code=start
function fun(a) {
  if (a.length < 2) return a;
  const left = [];
  const right = [];
  for (let i = 0; i < a.length; ++i) {
    if (i & 1) left.push(a[i]);
    else right.push(a[i]);
  }
  const res = [...fun(left), ...fun(right)];
  return res;
}

/**
 * @param {number} N
 * @return {number[]}
 */
var beautifulArray = function(N) {
  const a = Array(N)
    .fill(0)
    .map((t, i) => i + 1);
  return fun(a);
};
// @lc code=end

console.log(beautifulArray(5));
