/*
 * @lc app=leetcode.cn id=1122 lang=rust
 *
 * [1122] 数组的相对排序
 */

// @lc code=start
use std::collections::HashMap;

impl Solution {
    pub fn relative_sort_array(arr1: Vec<i32>, arr2: Vec<i32>) -> Vec<i32> {
        let mut map = HashMap::new();
        let mut right = Vec::new();
        let mut result = Vec::new();
        for i in 0..arr2.len() {
            map.insert(arr2[i], 0);
        }
        for i in 0..arr1.len() {
            if map.contains_key(&arr1[i]) {
                let count = map.entry(arr1[i]).or_insert(0);
                *count += 1;
            } else {
                right.push(arr1[i]);
            }
        }
        for i in 0..arr2.len() {
            let count = map.get(&arr2[i]).unwrap();
            for j in 0..*count {
                result.push(arr2[i]);
            }
        }
        right.sort();
        result.append(&mut right);
        return result;
    }
}
// @lc code=end

