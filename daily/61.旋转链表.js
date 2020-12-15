/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// @lc code=start
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (!head || !head.next) return head;
  let size = 1;
  let cur = head;
  while (cur.next) {
    cur = cur.next;
    size++;
  }
  let num = k % size;
  let node = head;
  while (num > 0) {
    let last = node;
    while (last.next && last.next.next) {
      last = last.next;
    }
    let val = last.next.val;
    last.next = null;
    let vhead = new ListNode(val);
    vhead.next = node;
    node = vhead;
    num--;
  }
  return node;
};
// @lc code=end

const head = new ListNode(1, new ListNode(2, new ListNode(3)));
console.log(rotateRight(head, 2000000000));
