/*
 * @lc app=leetcode.cn id=242 lang=rust
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
impl Solution {
    pub fn is_anagram(s: String, t: String) -> bool {
        if s.len() != t.len() { return false; }
        let mut arr = vec![0; 26];
        for c in s.chars() {
            arr[c as usize - 97] += 1;
        }
        for c in t.chars() {
            if arr[c as usize - 97] < 1 { return false; }
            else { arr[c as usize - 97] -= 1; }
        }
        return true;
    }
}
// @lc code=end

impl Solution {
    pub fn is_anagram(s: String, t: String) -> bool {
        let (mut s, mut t) = (s.into_bytes(), t.into_bytes());
        s.sort_unstable();
        t.sort_unstable();
        s == t
    }
}

