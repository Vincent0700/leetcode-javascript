/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start

var fn = (nums, target, arr, hashSet) => {
  if (target == 0) {
    hashSet.add(arr.sort().join(','));
  } else if (target > 0) {
    for (let n of nums) {
      if (n <= target) {
        fn(nums, target - n, [...arr, n], hashSet);
      }
    }
  }
};

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const hashSet = new Set();
  fn(candidates, target, [], hashSet);
  return [...hashSet].map((t) => t.split(',').map((n) => parseInt(n)));
};
// @lc code=end
