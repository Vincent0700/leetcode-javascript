/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// @lc code=start
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
  if (!nums.length) return null;
  const maxNum = Math.max(...nums);
  const index = nums.indexOf(maxNum);
  const left = nums.slice(0, index);
  const right = nums.slice(index + 1);
  return new TreeNode(maxNum, constructMaximumBinaryTree(left), constructMaximumBinaryTree(right));
};
// @lc code=end
