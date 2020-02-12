# LeetCode - Javascript 题解

个人 `LeetCode` 解题记录备份，使用 `Javascript` 语言解答，仅供参考，欢迎大神指教。

## 双指针

双指针主要用于遍历数组，两个指针指向不同的元素，从而协同完成任务

> 要求：数组有序

| 题号 | 标题 | 难度 | 题目链接 | 源码 | 用时击败 |
| -- | -- | -- | -- | -- | -- |
| 0001 | 两数之和 | ★☆☆ | [LeetCode][s0001] | [Source](./solutions/s0001_two-sum.js) | 95.44% |
| 0015 | 三数之和 | ★★☆ | [LeetCode][s0015] | [Source](./solutions/s0015_3sum.js) | 60.20% |
| 0088 | 合并两个有序数组 | ★☆☆ | [LeetCode][s0088] | [Source](./solutions/s0015_3sum.js) | 99.35% |
| 0141 | 判断链表是否存在环 | ★☆☆ | - | - | - |
| 0524 | 最长子序列 | ★★☆ | - | - | - |
| 0633 | 平方数之和 | ★☆☆ | [LeetCode][s0633] | [Source](./solutions/s0633_sum-of-square-numbers.js) | 98.06% |
| 0345 | 反转字符串中的元音字母 | ★☆☆ | [LeetCode][s0345] | [Source](./solutions/s0345_reverse-vowels-of-a-string.js) | 99.73% |
| 0680 | 验证回文字符串 Ⅱ | ★☆☆ | [LeetCode][s0680] | [Source](./solutions/s0680_valid-palindrome-ii.js) | 100.00% |

## 字典法

求满足条件的数组的索引，而条件值唯一，用索引作为值，空间换时间

> 要求：键不能重复

| 题号 | 标题 | 难度 | 题目链接 | 源码 | 用时击败 |
| -- | -- | -- | -- | -- | -- |
| 0001 | 两数之和 | ★☆☆ | [LeetCode][s0001] | [Source](./solutions/s0001_two-sum.js) | 95.44% |

## 贪心算法

保证每次操作都是局部最优的，并且最后得到的结果是全局最优的。


[s0001]: https://leetcode-cn.com/problems/two-sum/
[s0015]: https://leetcode-cn.com/problems/3sum/
[s0088]: https://leetcode-cn.com/problems/merge-sorted-array/
[s0633]: https://leetcode-cn.com/problems/sum-of-square-numbers/
[s0345]: https://leetcode-cn.com/problems/reverse-vowels-of-a-string/
[s0680]: https://leetcode-cn.com/problems/valid-palindrome-ii/