/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// @lc code=start
/**
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root, result = []) {
  if (!root) return [];
  if (root.left) inorderTraversal(root.left, result);
  result.push(root.val);
  if (root.right) inorderTraversal(root.right, result);
  return result;
};
// @lc code=end
