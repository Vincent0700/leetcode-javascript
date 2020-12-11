/*
 * @lc app=leetcode.cn id=697 lang=javascript
 *
 * [697] 数组的度
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
  let maxCount = 0;
  const obj = {};
  for (let i = 0; i < nums.length; ++i) {
    const n = nums[i];
    if (!obj[n]) {
      obj[n] = {
        num: n,
        start: i,
        end: i,
        len: 1,
        count: 1
      };
    } else {
      obj[n].end = i;
      obj[n].len = obj[n].end - obj[n].start + 1;
      obj[n].count++;
    }
    maxCount = Math.max(obj[n].count, maxCount);
  }
  return Object.values(obj)
    .filter((t) => t.count === maxCount)
    .sort((a, b) => a.len - b.len)[0].len;
};
// @lc code=end

console.log(findShortestSubArray([1, 2, 2, 3, 1]));
