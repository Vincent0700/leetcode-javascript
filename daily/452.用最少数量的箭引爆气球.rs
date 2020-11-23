/*
 * @lc app=leetcode.cn id=452 lang=rust
 *
 * [452] 用最少数量的箭引爆气球
 */

// @lc code=start
impl Solution {
    pub fn find_min_arrow_shots(points: Vec<Vec<i32>>) -> i32 {
        let mut i = 0;
        let mut count = 0;
        let mut points = points;
        points.sort_by_cached_key(|x| x[1]);
        while i < points.len() {
            let end = points[i][1];
            while i + 1 < points.len() && points[i + 1][0] <= end { i += 1; }
            i += 1;
            count += 1;
        }
        return count;
    }
}
// @lc code=end

