/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// @lc code=start
function fn(nodes) {
  if (!nodes.length) return true;
  let arr = [];
  let nums = nodes.map((n) => (n ? n.val : null));
  let i = 0,
    j = nums.length - 1;
  while (i < j) if (nums[i++] !== nums[j--]) return false;
  for (let node of nodes) {
    if (node) arr.push(node.left, node.right);
  }
  return fn(arr);
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  return fn([root]);
};
// @lc code=end
