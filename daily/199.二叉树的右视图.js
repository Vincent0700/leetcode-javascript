/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// @lc code=start

function traverse(nodes, arr = []) {
  arr.push(nodes);
  const next = [];
  for (let node of nodes) {
    if (node.left) next.push(node.left);
    if (node.right) next.push(node.right);
  }
  if (next.length > 0) traverse(next, arr);
  return arr;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  if (!root) return [];
  return traverse([root]).map((t) => t[t.length - 1].val);
};
// @lc code=end
