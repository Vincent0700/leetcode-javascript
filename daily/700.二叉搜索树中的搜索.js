/*
 * @lc app=leetcode.cn id=700 lang=javascript
 *
 * [700] 二叉搜索树中的搜索
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// @lc code=start\
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  let node = root;
  while (node && node.val !== val) {
    if (val < node.val) node = node.left;
    else node = node.right;
  }
  return node;
};
// @lc code=end
