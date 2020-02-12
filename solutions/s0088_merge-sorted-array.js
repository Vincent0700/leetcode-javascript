/**
 * @date 2020/01/25 15:04
 * @link https://leetcode-cn.com/problems/merge-sorted-array/
 */

/**
 * 解法一: 快排
 * T(n): O(nlgn)
 * 执行用时: 68 ms, 击败 65.22%
 */
// const merge = (nums1, m, nums2, n) => {
//     const arr = [...nums1.splice(0, m), ...nums2].sort((a, b) => a - b);
//     for (let i = 0; i < m + n; ++i) nums1[i] = arr[i];
// };

/**
 * 解法二: 双指针
 * T(n): O(n)
 * 执行用时: 68 ms, 击败 65.22%
 */
const merge = (nums1, m, nums2, n) => {
    let i = 0,
        j = 0;
    while (i + j < m + n + 2) {
        console.log(i, j, i + j);
        if (nums2[j] < nums1[i]) {
            for (let t = m + n - 1; t > i; --t) nums1[t] = nums1[t - 1];
            nums1[i] = nums2[j];
            i++;
            j++;
        } else i++;
    }
    // for (let t = j; t < n; ++t) nums1[m + t] = nums2[t];
};

console.time('test');
const nums1 = [-1, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0];
const nums2 = [-1, -1, 0, 0, 1, 2];
merge(nums1, nums1.length - nums2.length, nums2, nums2.length);
console.log(nums1);
console.timeEnd('test');
