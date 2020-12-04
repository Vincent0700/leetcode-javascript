/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

// @lc code=start
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (!head || !head.next) return head;
  const arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  let node = null;
  let preNode = null;
  arr.reverse().forEach((v) => {
    const tmpNode = new ListNode(v);
    if (!node) node = tmpNode;
    else preNode.next = tmpNode;
    preNode = tmpNode;
  });
  return node;
};
// @lc code=end
