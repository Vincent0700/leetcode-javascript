/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

// @lc code=start
function list2arr(head) {
  let arr = [];
  let node = head;
  while (node) {
    arr.push(node);
    node = node.next;
  }
  return arr;
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  let a = list2arr(headA);
  let b = list2arr(headB);
  if (!a.length || !b.length) return null;
  let ia = a.length - 1;
  let ib = b.length - 1;
  if (a[ia] !== b[ib]) return null;
  while (ia >= 1 && ib >= 1 && a[ia - 1] === b[ib - 1]) --ia && --ib;
  return a[ia];
};
// @lc code=end
