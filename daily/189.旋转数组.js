/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
const move = (i, k, len) => {
  let j = i + k;
  while (j > len - 1) j -= len;
  return j;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  const arr = [...nums];
  for (let i = 0; i < nums.length; ++i) {
    nums[move(i, k, nums.length)] = arr[i];
  }
};
// @lc code=end

const nums = [1, 2, 3, 4, 5, 6, 7];
rotate(nums, 3);
console.log(nums);
