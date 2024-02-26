/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 * 给定一个二叉树，找出其最小深度。
 * 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
 * 说明：叶子节点是指没有子节点的节点。
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
 * @return {number}
 */
var minDepth = function (root) {
  if (root == null) {
    return 0;
  }
  let depth = Infinity; // 当前子树的深度

  if (root.left) {
    // 左子树存在，用1+左子树的最小深度去刷新depth
    depth = Math.min(depth, 1 + minDepth(root.left));
  }
  if (root.right) {
    // 由子树存在，用1+右子树的最小深度去刷新depth
    depth = Math.min(depth, 1 + minDepth(root.right));
  }
  if (!root.left && !root.right) {
    // 都不存在
    depth = 1;
  }
  return depth;
};
// @lc code=end
