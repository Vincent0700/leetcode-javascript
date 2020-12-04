/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// @lc code=start
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (root) {
    invertTree(root.left);
    invertTree(root.right);
    let tmp = root.left;
    root.left = root.right;
    root.right = tmp;
    return root;
  } else return null;
};
// @lc code=end
