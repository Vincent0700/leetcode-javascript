/*
 * @lc app=leetcode.cn id=328 lang=java
 *
 * [328] 奇偶链表
 */

public class ListNode {
    int val;
    ListNode next;
    ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}

// @lc code=start
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode oddEvenList(ListNode head) {
        ListNode oddEnd = head;
        if (head == null || head.next == null) return head;
        ListNode evenEnd = head.next;
        ListNode evenBegin = evenEnd;
        ListNode cur = evenEnd;
        boolean isOdd = false;
        while (cur != null) {
            cur = cur.next;
            isOdd = !isOdd;
            if (isOdd) {
                oddEnd.next = cur;
                oddEnd = cur;
            } else {
                evenEnd.next = cur;
                evenEnd = cur;
            }
        }
        oddEnd.next = evenBegin;
        evenEnd.next = null;
        return head;
    }
}
// @lc code=end

