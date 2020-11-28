/*
 * @lc app=leetcode.cn id=506 lang=javascript
 *
 * [506] 相对名次
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
  const top = nums.map((v, k) => ({ v, k })).sort((a, b) => b.v - a.v);
  for (let i = 0; i < top.length; ++i) {
    if (i === 0) nums[top[i].k] = 'Gold Medal';
    else if (i === 1) nums[top[i].k] = 'Silver Medal';
    else if (i === 2) nums[top[i].k] = 'Bronze Medal';
    else {
      nums[top[i].k] = (i + 1).toString();
    }
  }
  return nums;
};
// @lc code=end

console.log(findRelativeRanks([5, 4, 3, 2, 1]));
