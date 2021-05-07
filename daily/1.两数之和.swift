/*
 * @lc app=leetcode.cn id=1 lang=swift
 *
 * [1] 两数之和
 */

// @lc code=start
class Solution {
    func twoSum(_ nums: [Int], _ target: Int) -> [Int] {
        for (i, a) in nums.enumerated() {
            for (j, b) in nums.enumerated() {
                if i != j && a + b == target {
                    return [i, j]
                } 
            }
        }
        return []
    }
}
// @lc code=end

