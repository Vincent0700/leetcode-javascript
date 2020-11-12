/*
 * @lc app=leetcode.cn id=922 lang=rust
 *
 * [922] 按奇偶排序数组 II
 */

// @lc code=start
impl Solution {
    pub fn sort_array_by_parity_ii(b: Vec<i32>) -> Vec<i32> {
        let mut a = b;
        let mut j = 1;
        for i in (0..=a.len() - 1).step_by(2) {
            if a[i] & 1 == 1 {
                while a[j] & 1 == 1 { j += 2; }
                a.swap(i, j);
            }
        }
        return a;
    }
}
// @lc code=end
