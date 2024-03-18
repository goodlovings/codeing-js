/*
 * @lc app=leetcode.cn id=563 lang=javascript
 *
 * [563] 二叉树的坡度
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
var findTilt = function (root) {
  let sum = 0;
  const treeDfs = (node) => {
    if (!node) return 0;
    let ls = treeDfs(node.left);
    let rs = treeDfs(node.right);
    sum += Math.abs(ls - rs);
    return ls + rs + node.val;
  };
  treeDfs(root);
  return sum;
};
// @lc code=end
