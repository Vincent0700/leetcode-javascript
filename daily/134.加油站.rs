/*
 * @lc app=leetcode.cn id=134 lang=rust
 *
 * [134] 加油站
 */

// @lc code=start
impl Solution {
    pub fn can_complete_circuit(gas: Vec<i32>, cost: Vec<i32>) -> i32 {
        let mut total = 0;
        let mut dist = 0;
        let mut start = 0;
        for i in 0..gas.len() {
          let delta = gas[i] - cost[i];
          dist += delta;
          total += delta;
          if (dist < 0) {
            dist = 0;
            start = i as i32 + 1;
          }
        }
        if total < 0 { -1 } else { start }
    }
}
// @lc code=end

