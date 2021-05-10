/*
 * @lc app=leetcode.cn id=872 lang=javascript
 *
 * [872] 叶子相似的树
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// @lc code=start
function fn(root, arr) {
  if (!root) return;
  if (!root.left && !root.right) arr.push(root.val);
  fn(root.left, arr);
  fn(root.right, arr);
}

function getLeafs(root) {
  const arr = [];
  fn(root, arr);
  return arr;
}

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
  return getLeafs(root1).toString() == getLeafs(root2);
};
// @lc code=end
