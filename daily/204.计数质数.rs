/*
 * @lc app=leetcode.cn id=204 lang=rust
 *
 * [204] 计数质数
 */

// @lc code=start
impl Solution {
    pub fn count_primes(n: i32) -> i32 {
        let mut a = vec![true; n as usize];
        for i in 2..((n as f64).sqrt() + 1f64) as i32 {
            if a[i as usize] == true {
                for j in i..(n/i + 1) {
                    if i * j < n { a[(i * j) as usize] = false; }
                }
            }
        }
        let mut count = 0;
        for i in 2..n { 
            if a[i as usize] == true { count += 1; }
         }
        return count;
    }
}
// @lc code=end

