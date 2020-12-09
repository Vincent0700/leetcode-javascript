/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  const cash = { 5: 0, 10: 0 };
  for (let pay of bills) {
    if (pay === 5) cash[5]++;
    else if (pay === 10) {
      if (cash[5] > 0) {
        cash[5]--;
        cash[10]++;
      } else return false;
    } else if (pay === 20) {
      if (cash[10] > 0 && cash[5] > 0) {
        cash[5]--;
        cash[10]--;
      } else if (cash[5] > 2) cash[5] -= 3;
      else return false;
    }
  }
  return true;
};
// @lc code=end
