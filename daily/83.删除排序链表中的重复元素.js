/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if (!head) return head;
  let pt = head;
  let val = pt.val;
  while (pt.next) {
    if (pt.next.val === val) pt.next = pt.next.next;
    else (pt = pt.next), (val = pt.val);
  }
  return head;
};
// @lc code=end
