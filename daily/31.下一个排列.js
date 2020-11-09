/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start

const rfind = (arr, cb) => {
  for (let i = arr.length - 1; i >= 1; --i) if (cb(arr[i], i)) return i;
  return -1;
};

const nextPermutation = function(nums) {
  const a = rfind(nums, (v, i) => v > nums[i - 1]);
  if (!~a) return nums.reverse();
  const b = rfind(nums, (v) => v > nums[a - 1]);
  [nums[a - 1], nums[b]] = [nums[b], nums[a - 1]];
  nums.splice(a, nums.length - a, ...nums.slice(a).reverse());
  return nums;
};

// @lc code=end

console.log(nextPermutation([3, 2, 1]));
