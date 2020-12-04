/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// @lc code=start
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root, tmp = [], result = []) {
  if (!root) return [];
  if (!root.left && !root.right) {
    result.push([...tmp, root.val].join('->'));
  } else {
    if (root.left) binaryTreePaths(root.left, [...tmp, root.val], result);
    if (root.right) binaryTreePaths(root.right, [...tmp, root.val], result);
  }
  return result;
};
// @lc code=end
