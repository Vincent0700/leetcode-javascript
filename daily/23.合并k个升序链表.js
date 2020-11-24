/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// @lc code=start
var list2vec = (head) => {
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

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  return arr2list(
    lists
      .map((t) => list2vec(t))
      .flat()
      .sort((a, b) => a - b)
  );
};
// @lc code=end

// 正常解法：
// var mergeKLists = function(lists) {
//   if (!lists.length) return null
//   const next = () => lists.reduce((acc, head, index) => {
//     if (acc === -1) return head ? index : acc
//     else if (lists[acc] && head && head.val < lists[acc].val) return index
//     else return acc
//   }, -1)
//   let i = next()
//   let head = lists[i]
//   if (!head) return null
//   lists[i] = head.next
//   let cur = head
//   cur.next = null
//   i = next()
//   while (i !== -1) {
//     cur.next = lists[i]
//     cur = cur.next
//     lists[i] = cur.next
//     cur.next = null
//     i = next()
//   }
//   return head
// };

const N = (val, node = null) => new ListNode(val, node);
const lists = [N(1, N(4, N(5))), N(1, N(3, N(4))), N(2, N(6))];
mergeKLists(lists);
