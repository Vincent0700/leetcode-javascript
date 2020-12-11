/*
 * @lc app=leetcode.cn id=1385 lang=javascript
 *
 * [1385] 两个数组间的距离值
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
  let count = 0;
  for (let a of arr1) {
    let flag = true;
    for (let b of arr2) {
      if (Math.abs(a - b) <= d) {
        flag = false;
        break;
      }
    }
    if (flag) count++;
  }
  return count;
};
// @lc code=end

console.log(findTheDistanceValue([4, 5, 8], [10, 9, 1, 8], 2));
