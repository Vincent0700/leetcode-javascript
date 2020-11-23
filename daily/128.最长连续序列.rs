/*
 * @lc app=leetcode.cn id=128 lang=rust
 *
 * [128] 最长连续序列
 */

// @lc code=start
use std::cmp::max;
use std::collections::HashSet;

impl Solution {
    pub fn longest_consecutive(nums: Vec<i32>) -> i32 {
        let set: HashSet<i32> = nums.into_iter().collect();
        let mut arr: Vec<i32> = set.into_iter().collect();
        let mut max_count = 0;
        arr.sort_unstable();
        for mut i in 0..arr.len() {
            let mut count = 1;
            while i + 1 < arr.len() && arr[i + 1] - arr[i] == 1 {
                i += 1;
                count += 1;
            }
            max_count = max(max_count, count);
        }
        return max_count;
    }
}
// @lc code=end

