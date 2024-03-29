/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  return BST(root, -Infinity, Infinity);
};

function BST(root, lower, upper) {
  if (!root) return true;

  if (root.val <= lower || root.val >= upper) {
    return false;
  }

  return BST(root.left, lower, root.val) && BST(root.right, root.val, upper);
}

// @lc code=end
