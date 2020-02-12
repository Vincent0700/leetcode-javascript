/**
 * @date 2020/01/24 19:03
 * @link https://leetcode-cn.com/problems/3sum/
 */

/**
 * 快排，双指针 + 去重
 * T(n): O(n^2)
 * 执行用时: 196 ms, 击败 60.20%
 */
// const threeSum = (nums) => {
//     const result = [];
//     nums.sort((a, b) => a - b);
//     for (let i = 0; i < nums.length - 2; ++i) {
//         if (i > 0) while (nums[i] === nums[i - 1]) i++;
//         const target = -nums[i];
//         const arr = [];
//         let j = i + 1,
//             k = nums.length - 1;
//         while (j < k) {
//             const sum = nums[j] + nums[k];
//             if (sum < target || (j > i + 1 && nums[j] === nums[j - 1])) j++;
//             else if (sum > target || (k < nums.length - 1 && nums[k] === nums[k + 1])) k--;
//             else arr.push([nums[j], nums[k--]]);
//         }
//         arr.forEach((item) => {
//             result.push([nums[i], ...item]);
//         });
//     }
//     return result;
// };

const threeSum = (nums) => {
    nums;
};

const nums = [-5, -5, -4, -4, -4, -2, -2, -2, 0, 0, 0, 1, 1, 3, 4, 4];

console.time('test');
console.log(threeSum(nums));
console.timeEnd('test');
