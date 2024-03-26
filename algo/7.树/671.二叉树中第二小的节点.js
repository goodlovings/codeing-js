/*
 * @lc app=leetcode.cn id=671 lang=javascript
 *
 * [671] 二叉树中第二小的节点
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
var findSecondMinimumValue = function (root) {
  let res = [Infinity, Infinity];
  const treeDfs = (node) => {
    if (!node) return;
    res[0] = Math.min(res[0], node.val);
    if (res[0] < node.val) {
      res[1] = Math.min(res[1], node.val);
    }
    treeDfs(node.left);
    treeDfs(node.right);
  };
  treeDfs(root);
  if (res[1] === Infinity) return -1;
  return res[1];
};
// @lc code=end
