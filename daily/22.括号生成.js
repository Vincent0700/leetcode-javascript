/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 *
 * @param {*} arr 数组
 * @param {*} s 当前字符串
 * @param {*} n 剩余括号数
 * @param {*} t 未配对的括号数
 */
var fn = function(arr, s, n, t) {
  if (!n) {
    while (t-- > 0) s += ')';
    arr.push(s);
  } else {
    fn(arr, s + '(', n - 1, t + 1); // 新增左括号
    if (t > 0) fn(arr, s + ')', n, t - 1); // 闭合右括号
  }
};
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const arr = [];
  fn(arr, '', n, 0);
  return arr;
};
// @lc code=end
