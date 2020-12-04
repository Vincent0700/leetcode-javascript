/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

// @lc code=start
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (!head) return true;
  const arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  let i = 0,
    j = arr.length - 1;
  while (i <= j) if (arr[i++] !== arr[j--]) return false;
  return true;
};
// @lc code=end
