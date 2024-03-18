/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
var diameterOfBinaryTree = function (root) {
  let road = 0;
  const treeDfs = (node) => {
    if (!node) return 0;
    let rl = treeDfs(node.left);
    let rr = treeDfs(node.right);
    road = Math.max(road, rl + rr);
    return Math.max(rl, rr) + 1;
  };
  treeDfs(root);
  return road;
};
// @lc code=end
