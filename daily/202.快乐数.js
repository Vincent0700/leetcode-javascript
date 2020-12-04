/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n, map = new Map()) {
  if (n === 1) return true;
  else if (map.has(n)) return false;
  map.set(n, true);
  const num = n
    .toString()
    .split('')
    .reduce((acc, cur) => acc + Math.pow(parseInt(cur), 2), 0);
  return isHappy(num, map);
};
// @lc code=end

console.log(isHappy(19));
