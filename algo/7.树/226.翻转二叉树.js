/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  const treeDf = (root) => {
    if (!root) return null;
    let left = root.left;
    root.left = root.right;
    root.right = left;
    treeDf(root.left);
    treeDf(root.right);
  };
  treeDf(root);
  return root;
};
// @lc code=end
