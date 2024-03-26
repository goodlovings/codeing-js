/*
 * @lc app=leetcode.cn id=783 lang=javascript
 *
 * [783] 二叉搜索树节点最小距离
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
var minDiffInBST = function (root) {
  let minAbs = Number.MAX_SAFE_INTEGER,
    pre = -1;
  const treeDfs = (node) => {
    if (!node) return;
    treeDfs(node.left);
    if (pre === -1) {
      pre = node.val;
    } else {
      minAbs = Math.min(minAbs, node.val - pre);
      pre = node.val;
    }
    treeDfs(node.right);
  };
  treeDfs(root);
  return minAbs;
};
// @lc code=end
