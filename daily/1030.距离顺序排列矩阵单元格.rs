/*
 * @lc app=leetcode.cn id=1030 lang=rust
 *
 * [1030] 距离顺序排列矩阵单元格
 */

// @lc code=start
impl Solution {
    pub fn all_cells_dist_order(r: i32, c: i32, r0: i32, c0: i32) -> Vec<Vec<i32>> {
        let mut result = Vec::new();
        (0..r).for_each(|i| 
            (0..c).for_each(|j| 
                result.push(((i - r0).abs() + (j - c0).abs(), vec![i, j]))));
        result.sort_unstable_by_key(|(v, t)| *v);
        result.into_iter().map(|v| v.1).collect()
    }
}
// @lc code=end
