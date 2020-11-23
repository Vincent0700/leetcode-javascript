/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  for (let c of s) {
    if (c === '(') stack.push(')');
    else if (c === '[') stack.push(']');
    else if (c === '{') stack.push('}');
    else {
      if (stack.length && stack[stack.length - 1] === c) stack.pop();
      else return false;
    }
  }
  return !stack.length;
};
// @lc code=end

console.log(isValid('(]'));
