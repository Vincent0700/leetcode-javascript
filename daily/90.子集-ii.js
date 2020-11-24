/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  const hashSet = new Set();
  for (let n = 0; n < 2 ** nums.length; ++n) {
    const arr = [];
    for (let i = 0; i < nums.length; ++i) {
      if (n & (1 << i)) arr.push(nums[i]);
    }
    hashSet.add(arr.sort((a, b) => a - b).join(','));
  }
  return [...hashSet].map((t) => (t ? t.split(',') : []));
};
// @lc code=end
