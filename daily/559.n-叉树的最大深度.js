/*
 * @lc app=leetcode.cn id=559 lang=javascript
 *
 * [559] N 叉树的最大深度
 */

function Node(val, children) {
  this.val = val;
  this.children = children;
}

// @lc code=start
/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) return 0;
  let max = 1
  for (let i = 0; i < root.children.length; ++i) {
    max = Math.max(max, maxDepth(root.children[i]) + 1)
  }
  return max
};
// @lc code=end
