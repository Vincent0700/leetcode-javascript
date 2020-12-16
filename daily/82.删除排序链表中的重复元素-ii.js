/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
var deleteDuplicates = function(head) {
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  const map = new Map();
  for (let n of arr) {
    map.set(n, map.has(n) ? map.get(n) + 1 : 1);
  }
  arr = [...map].filter((t) => t[1] === 1).map((t) => t[0]);
  if (!arr.length) return null;
  head = new ListNode(arr[0]);
  let node = head;
  for (let i = 1; i < arr.length; ++i) {
    node.next = new ListNode(arr[i]);
    node = node.next;
  }
  return head;
};
// @lc code=end
