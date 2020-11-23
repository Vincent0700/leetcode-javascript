/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
var twoSum = function(nums, i, j, target) {
  const arr = [];
  let l = 0,
    r = nums.length - 1;
  while (l < r) {
    if (l === i || l === j) l++;
    else if (r === i || r === j) r--;
    else {
      const n = target - nums[i] - nums[j];
      if (nums[l] + nums[r] < n) l++;
      else if (nums[l] + nums[r] > n) r--;
      else {
        arr.push([nums[i], nums[j], nums[l], nums[r]].sort((a, b) => a - b).join(','));
        l++, r--;
      }
    }
  }
  return arr;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  const hashSet = new Set();
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; ++i) {
    for (let j = i + 1; j < nums.length; ++j) {
      const arr = twoSum(nums, i, j, target);
      for (let s of arr) hashSet.add(s);
    }
  }
  return [...hashSet].map((t) => t.split(',').map((t) => parseInt(t)));
};
// @lc code=end

console.log(fourSum([-3, -2, -1, 0, 0, 1, 2, 3], 0));
