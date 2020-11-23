/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// @lc code=start
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let pre = new ListNode(-1, head);
  let cur = head;
  let node = pre;
  for (let i = 1; i < n; ++i) {
    cur = cur.next;
  }
  while (cur && cur.next) {
    cur = cur.next;
    node = node.next;
  }
  if (node && node.next) {
    node.next = node.next.next;
  }
  return pre.next;
};
// @lc code=end

let head = new ListNode(5, null);
head = new ListNode(4, head);
head = new ListNode(3, head);
head = new ListNode(2, head);
head = new ListNode(1, head);
removeNthFromEnd(head, 2);
