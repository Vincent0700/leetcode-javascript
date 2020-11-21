/*
 * @lc app=leetcode.cn id=147 lang=javascript
 *
 * [147] 对链表进行插入排序
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
  if (!head) return head;
  let start = head;
  let end = head;
  while (end.next) {
    const cur = end.next;
    const next = cur.next;
    cur.next = null;
    end.next = null;
    let it = start;
    let pre = null;
    while (it && it.val < cur.val) {
      pre = it
      it = it.next;
    }
    if (pre) pre.next = cur;
    else start = cur;
    if (it) cur.next = it;
    else end = cur
    end.next = next;
  }
  return start;
};
// @lc code=end

const head = {
  val: -1,
  next: {
    val: 5,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 0,
          next: null
        }
      }
    }
  }
}

let a = insertionSortList(head);
while (a) {
  console.log(a.val)
  a = a.next;
}