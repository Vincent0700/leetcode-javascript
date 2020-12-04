/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

// @lc code=start
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  let node = head,
    pre = null;
  while (node) {
    if (node.val === val) {
      if (!pre) {
        head = node.next;
        pre = null;
        node = node.next;
      } else {
        pre.next = node.next;
        node = node.next;
      }
    } else {
      pre = node;
      node = node.next;
    }
  }
  return head;
};
// @lc code=end
