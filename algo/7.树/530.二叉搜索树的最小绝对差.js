/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
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
var getMinimumDifference = function (root) {
  let res = Infinity,
    arr = [];
  const treeDfs = (node) => {
    if (!node) return;
    treeDfs(node.left);
    arr.push(node.val);
    treeDfs(node.right);
  };
  treeDfs(root);
  for (let i = 0; i < arr.length - 1; i++) {
    res = Math.min(res, arr[i + 1] - arr[i]);
  }
  return res;
};
// @lc code=end
