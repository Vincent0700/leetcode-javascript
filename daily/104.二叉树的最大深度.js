/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// @lc code=start
function fn(nodes, n) {
  if (!nodes.length) return n;
  let arr = [];
  for (let node of nodes) {
    if (node.left) arr.push(node.left);
    if (node.right) arr.push(node.right);
  }
  return fn(arr, n + 1);
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) return 0;
  return fn([root], 0);
};
// @lc code=end
