/*
 * @lc app=leetcode.cn id=2 lang=swift
 *
 * [2] 两数相加
 */

public class ListNode {
    public var val: Int
    public var next: ListNode?
    public init() { self.val = 0; self.next = nil; }
    public init(_ val: Int) { self.val = val; self.next = nil; }
    public init(_ val: Int, _ next: ListNode?) { self.val = val; self.next = next; }
}

// @lc code=start
class Solution {
    func addTwoNumbers(_ l1: ListNode?, _ l2: ListNode?) -> ListNode? {
        let root = ListNode()
        var node = root
        var (l1, l2) = (l1, l2)
        var flag = 0
        while l1 !== nil || l2 !== nil {
            node.next = ListNode(flag)
            node = node.next!
            if let t = l1 {
                node.val += t.val
                l1 = l1?.next
            }
            if let t = l2 {
                node.val += t.val
                l2 = l2?.next
            }
            flag = node.val / 10
            node.val %= 10
        }
        if flag != 0 {
            node.next = ListNode(flag)
        }
        return root.next
    }
}
// @lc code=end

