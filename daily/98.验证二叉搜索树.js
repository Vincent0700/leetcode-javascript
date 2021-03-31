/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// @lc code=start
const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;
const isRange = (val, [min, max]) => val > min && val < max;

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root, [min, max] = [MIN, MAX]) {
  if (!isRange(root.val, [min, max])) return false;
  if (root.left && (root.left.val >= root.val || !isValidBST(root.left, [min, root.val])))
    return false;
  if (root.right && (root.right.val <= root.val || !isValidBST(root.right, [root.val, max])))
    return false;
  return true;
};
// @lc code=end
