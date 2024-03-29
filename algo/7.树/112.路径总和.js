/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
 * 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum 。判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。如果存在，返回 true ；否则，返回 false 。
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) {
    return false;
  }
  let res = false;
  const treeIteration = (node, sum) => {
    if (!node.right && !node.left) {
      if (sum + node.val === targetSum) {
        res = true;
        return;
      }
    }
    if (node.left) {
      treeIteration(node.left, sum + node.val);
    }
    if (node.right) {
      treeIteration(node.right, sum + node.val);
    }
  };
  treeIteration(root, 0);
  return res;
};
// @lc code=end
