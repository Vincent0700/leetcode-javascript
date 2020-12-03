/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// @lc code=start
function fn(nodes, result) {
  if (!nodes.length) return;
  let arr = [];
  let nums = [];
  for (let node of nodes) {
    if (node) {
      nums.push(node.val);
      if (node.left) arr.push(node.left);
      if (node.right) arr.push(node.right);
    }
  }
  result.unshift(nums);
  fn(arr, result);
}
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if (!root) return [];
  let result = [];
  fn([root], result);
  return result;
};
// @lc code=end
