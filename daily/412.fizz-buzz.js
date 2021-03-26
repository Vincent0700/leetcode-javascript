/*
 * @lc app=leetcode.cn id=412 lang=javascript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  const result = [];
  for (let i = 1; i <= n; ++i) {
    if (!(i % 15)) result.push('FizzBuzz');
    else if (!(i % 3)) result.push('Fizz');
    else if (!(i % 5)) result.push('Buzz');
    else result.push(i.toString());
  }
  return result;
};
// @lc code=end
