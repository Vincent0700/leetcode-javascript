/**
 * 解法一: 两层 for 循环
 * T(n): O(n^2)
 * 执行用时: 216 ms, 击败 13.53%
 */
// const twoSum = (nums, target) => {
//     for (let i =0; i < nums.length; ++i)
//         for(let j = 0; j <nums.length; ++j)
//             if(i !== j && nums[i] + nums[j] === target)
//                 return [i,j]
// };

/**
 * 解法二: 快排 + 双指针
 * T(n): Θ(nlgn)
 * 执行用时: 84 ms, 击败 62.86%
 */
// const twoSum = (nums, target) => {
//     nums = nums.map((value, index) => ({ value, index }));
//     nums.sort((a, b) => a.value - b.value);
//     let i = 0,
//         j = nums.length - 1;
//     while (i < j) {
//         const sum = nums[i].value + nums[j].value;
//         if (sum < target) i++;
//         else if (sum > target) j--;
//         else return [nums[i].index, nums[j].index];
//     }
// };

/**
 * 解法三: 字典
 * T(n): Θ(n)
 * 执行用时: 60 ms, 击败 95.44%
 */
const twoSum = (nums, target) => {
  const hashmap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const diff = target - num;
    const j = hashmap.get(diff);
    if (j !== undefined) return [i, j];
    hashmap.set(num, i);
  }
};

const nums = [2, 7, 11, 15];
const target = 9;

console.time('test');
console.log(twoSum(nums, target));
console.timeEnd('test');
