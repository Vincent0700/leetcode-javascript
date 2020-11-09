/**
 * 解法一: 快排
 * T(n): O(nlgn)
 * 执行用时: 76 ms, 击败 25.95%
 */
// const merge = (nums1, m, nums2, n) => {
//     const arr = [...nums1.splice(0, m), ...nums2].sort((a, b) => a - b);
//     for (let i = 0; i < m + n; ++i) nums1[i] = arr[i];
// };

/**
 * 解法二: 双指针
 * T(n): O(n)
 * 执行用时: 64 ms, 击败 99.35%
 */
const merge = (nums1, m, nums2, n) => {
  if (m == 0) return nums1.splice(0, n, ...nums2), nums2;
  if (n === 0) return nums1;

  let i = 0;
  let j = 0;
  const result = [];

  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) result.push(nums1[i++]);
    else result.push(nums2[j++]);
  }

  if (i === m) result.push(...nums2.slice(j, n));
  else if (j === n) result.push(...nums1.slice(i, m));

  nums1.splice(0, m + n, ...result);
  return result;
};

console.time('test');
const nums1 = [1, 2, 3, 0, 0, 0],
  nums2 = [2, 5, 6];
merge(nums1, nums1.length - nums2.length, nums2, nums2.length);
console.log(nums1);
console.timeEnd('test');
