/**
 * 动态规划
 * dp[i] = max { dp[i-1] + a[i], a[i] }
 * T(n): Θ(n)
 * 执行用时: 72 ms, 击败 62.66%
 */
const maxSubArray = (nums) => {
  for (let i = 1; i < nums.length; ++i) {
    nums[i] = nums[i] + Math.max(nums[i - 1], 0);
  }
  return Math.max(...nums);
};

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

console.time('test');
console.log(maxSubArray(nums));
console.timeEnd('test');
