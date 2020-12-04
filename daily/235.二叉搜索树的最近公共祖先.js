/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  let node = root;
  if (p.val > q.val) [p, q] = [q, p];
  while (true) {
    if (p.val <= node.val && q.val >= node.val) return node;
    if (q.val < node.val) node = node.left;
    else node = node.right;
  }
};
// @lc code=end
