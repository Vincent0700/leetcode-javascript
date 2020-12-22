/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// @lc code=start
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  if (!root) return [];
  const result = [];
  let level = [root];
  let order = true;
  while (level.length > 0) {
    const vals = level.map((t) => t.val);
    if (!order) vals.reverse();
    result.push(vals);
    const tmp = [];
    level.forEach((t) => {
      if (t.left) tmp.push(t.left);
      if (t.right) tmp.push(t.right);
    });
    order = !order;
    level = tmp;
  }
  return result;
};
// @lc code=end

const D = (val, left = null, right = null) => {
  const node = new TreeNode(val);
  node.left = left;
  node.right = right;
  return node;
};
const root = D(3, D(9), D(20, D(15), D(7)));
console.log(zigzagLevelOrder(root));
