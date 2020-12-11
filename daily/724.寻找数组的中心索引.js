/*
 * @lc app=leetcode.cn id=724 lang=javascript
 *
 * [724] 寻找数组的中心索引
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  if (nums.length < 3) return -1;
  let i = 0;
  let lSum = 0;
  let rSum = nums.slice(1).reduce((acc, cur) => acc + cur, 0);
  while (i < nums.length) {
    if (lSum === rSum) return i;
    else {
      lSum += nums[i++];
      rSum -= nums[i];
    }
  }
  return -1;
};
// @lc code=end

console.log(pivotIndex([1, -1, 2, 4, -1, -3]));
