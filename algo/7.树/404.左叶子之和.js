/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
var sumOfLeftLeaves = function (root) {
  let sum = 0;
  const treeDfs = (node, flag) => {
    if (!node.left && !node.right && flag) {
      sum += node.val;
      return;
    }
    node.left && treeDfs(node.left, true);
    node.right && treeDfs(node.right, false);
  };
  treeDfs(root, false);
  return sum;
};
// @lc code=end
