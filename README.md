# LeetCode - Javascript 题解

个人 `LeetCode` 解题记录备份，使用 `Javascript` 语言解答，仅供参考，欢迎大神指教。

## 双指针

双指针主要用于遍历数组，两个指针指向不同的元素，从而协同完成任务

> 要求：数组有序

| 题号 | 标题                   | 难度 | 题目链接          | 源码                                                      | 用时击败 |
| ---- | ---------------------- | ---- | ----------------- | --------------------------------------------------------- | -------- |
| 0001 | 两数之和               | ★☆☆  | [LeetCode][s0001] | [Source](./solutions/s0001_two-sum.js)                    | 95.44%   |
| 0015 | 三数之和               | ★★☆  | [LeetCode][s0015] | [Source](./solutions/s0015_3sum.js)                       | 60.20%   |
| 0088 | 合并两个有序数组       | ★☆☆  | [LeetCode][s0088] | [Source](./solutions/s0015_3sum.js)                       | 99.35%   |
| 0141 | 判断链表是否存在环     | ★☆☆  | -                 | -                                                         | -        |
| 0524 | 最长子序列             | ★★☆  | -                 | -                                                         | -        |
| 0633 | 平方数之和             | ★☆☆  | [LeetCode][s0633] | [Source](./solutions/s0633_sum-of-square-numbers.js)      | 98.06%   |
| 0345 | 反转字符串中的元音字母 | ★☆☆  | [LeetCode][s0345] | [Source](./solutions/s0345_reverse-vowels-of-a-string.js) | 99.73%   |
| 0680 | 验证回文字符串 Ⅱ       | ★☆☆  | [LeetCode][s0680] | [Source](./solutions/s0680_valid-palindrome-ii.js)        | 100.00%  |

## 贪心算法

局部最优解 => 全局最优解

| 题号 | 标题       | 难度 | 题目链接          | 源码                                                     | 用时击败 |
| ---- | ---------- | ---- | ----------------- | -------------------------------------------------------- | -------- |
| 0435 | 无重叠区间 | ★★☆  | [LeetCode][s0435] | [Source](./solutions/s0435_non-overlapping-intervals.js) | 97.53%   |
| 0455 | 分发饼干   | ★☆☆  | [LeetCode][s0455] | [Source](./solutions/s0455_assign-cookies.js)            | 87.43%   |

## 二分查找

二分查找也称为折半查找，每次都能将查找区间减半，时间复杂度为 O(lgn)。

> 要求：数组有序

| 题号 | 标题                       | 难度 | 题目链接          | 源码                                                                    | 用时击败 |
| ---- | -------------------------- | ---- | ----------------- | ----------------------------------------------------------------------- | -------- |
| 0069 | x 的平方根                 | ★☆☆  | [LeetCode][s0069] | [Source](./solutions/s0069_sqrtx.js)                                    | 92.90%   |
| 0744 | 寻找比目标字母大的最小字母 | ★☆☆  | [LeetCode][s0744] | [Source](./solutions/s0744_find-smallest-letter-greater-than-target.js) | 92.50%   |

## 动态规划

递归和动态规划都是将原问题拆成多个子问题然后求解，他们之间最本质的区别是，动态规划保存了子问题的解，
避免重复计算。

[s0001]: https://leetcode-cn.com/problems/two-sum/
[s0015]: https://leetcode-cn.com/problems/3sum/
[s0069]: https://leetcode-cn.com/problems/sqrtx/
[s0070]: https://leetcode-cn.com/problems/climbing-stairs/submissions/
[s0088]: https://leetcode-cn.com/problems/merge-sorted-array/
[s0633]: https://leetcode-cn.com/problems/sum-of-square-numbers/
[s0345]: https://leetcode-cn.com/problems/reverse-vowels-of-a-string/
[s0435]: https://leetcode-cn.com/problems/non-overlapping-intervals/
[s0455]: https://leetcode-cn.com/problems/assign-cookies/
[s0680]: https://leetcode-cn.com/problems/valid-palindrome-ii/
[s0744]: https://leetcode-cn.com/problems/find-smallest-letter-greater-than-target/
