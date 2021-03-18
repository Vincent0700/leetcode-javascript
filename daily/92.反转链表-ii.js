/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

// [ah, at] - [bh, bt] - [ch, ct]
// bh = at.next
// ch = bt.next

// @lc code=start
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  let i = 0;
  let arr = [];
  let thead = head;
  while (thead) arr.push(thead.val), (thead = thead.next);
  arr = arr
    .slice(0, m - 1)
    .concat(arr.slice(m - 1, n).reverse())
    .concat(arr.slice(n));
  thead = head;
  while (thead) (thead.val = arr[i++]), (thead = thead.next);
  return head;
};
// @lc code=end
