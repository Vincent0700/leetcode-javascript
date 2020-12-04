/*
 * @lc app=leetcode.cn id=237 lang=javascript
 *
 * [237] 删除链表中的节点
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

// @lc code=start
var deleteNode = function(node) {
  node.val = node.next.val;
  node.next = node.next.next;
};
// @lc code=end
