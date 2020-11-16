/*
 * @lc app=leetcode.cn id=406 lang=rust
 *
 * [406] 根据身高重建队列
 */

// @lc code=start
impl Solution {
    pub fn reconstruct_queue(people: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        let mut people = people;
        let mut result = vec![];
        people.sort_by(|a, b| if a[0] == b[0] { a[1].cmp(&b[1]) } else { b[0].cmp(&a[0]) } );
        for p in people { result.insert(p[1] as usize, p) }
        return result;
    }
}
// @lc code=end

