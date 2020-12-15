/*
 * @lc app=leetcode.cn id=1491 lang=javascript
 *
 * [1491] 去掉最低工资和最高工资后的工资平均值
 */

// @lc code=start
/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
  let min = salary[0];
  let max = salary[0];
  return (
    (salary.reduce((acc, cur) => {
      min = Math.min(min, cur);
      max = Math.max(max, cur);
      return acc + cur;
    }, 0) -
      (min + max)) /
    (salary.length - 2)
  );
};
// @lc code=end
