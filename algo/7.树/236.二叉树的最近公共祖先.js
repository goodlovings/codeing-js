/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  const treeDf = (root) => {
    if (!root) return null;
    if (root.val === p.val || root.val === q.val) return root;
    root.left = treeDf(root.left);
    root.right = treeDf(root.right);
    if (root.left && root.right) return root;
    if (root.left) return root.left;
    if (root.right) return root.right;
    return null;
  };
  return treeDf(root);
};
// @lc code=end
