/*
 * @lc app=leetcode.cn id=99 lang=javascript
 *
 * [99] 恢复二叉搜索树
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  let prev = new TreeNode(-Infinity);
  let err1 = null,
    err2 = null;
  const inOrder = (root) => {
    if (!root) return;
    inOrder(root.left);
    if (prev.val >= root.val && !err1) {
      err1 = prev;
    }
    if (prev.val >= root.val && err1) {
      err2 = root;
    }
    prev = root;
    inOrder(root.right);
  };
  inOrder(root);
  [err1.val, err2.val] = [err2.val, err1.val];
};
// @lc code=end
