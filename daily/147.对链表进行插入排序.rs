/*
 * @lc app=leetcode.cn id=147 lang=rust
 *
 * [147] 对链表进行插入排序
 */

#[derive(PartialEq, Eq, Clone, Debug)]
pub struct ListNode {
  pub val: i32,
  pub next: Option<Box<ListNode>>
}

impl ListNode {
  #[inline]
  fn new(val: i32) -> Self {
    ListNode {
      next: None,
      val
    }
  }
}

// @lc code=start
// Definition for singly-linked list.

pub fn vec2list(mut arr: Vec<i32>) -> Option<Box<ListNode>> {
    match arr.pop() {
        Some(x) => Some(Box::new(ListNode {
            val: x,
            next: vec2list(arr),
        })),
        None => None,
    }
}

impl Solution {
    pub fn insertion_sort_list(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        if head.is_none() { return None; }
        let mut arr = vec![];
        let mut start = head;
        while let Some(x) = start {
            arr.push(x.val);
            start = x.next;
        }
        arr.sort_unstable_by(|a, b| b.cmp(&a));
        return vec2list(arr);
    }
}
// @lc code=end

