/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var list2arr = (head) => {
  const arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  return arr;
};

var arr2list = (arr) => {
  if (arr.length === 0) return null;
  let head = new ListNode(arr[0], null);
  let cur = head;
  for (let i = 1; i < arr.length; ++i) {
    cur.next = new ListNode(arr[i], null);
    cur = cur.next;
  }
  return head;
};

// @lc code=start
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (!head || !head.next) return head;
  let pre = head;
  let next = pre.next;
  let tmp = null;
  const start = next;
  while (pre && next) {
    pre.next = next.next;
    next.next = pre;
    if (tmp) tmp.next = next;
    tmp = pre;
    pre = pre.next;
    next = pre ? pre.next : null;
  }
  return start;
};
// @lc code=end

const list = arr2list([1, 2, 3, 4]);
const arr = list2arr(swapPairs(list));
console.log(arr);
