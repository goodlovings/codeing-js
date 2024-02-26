/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  let arr = [];
  treeDp(root, arr);
  return arr;
};
function treeDp(root, arr) {
  if (!root) {
    return null;
  }
  treeDp(root.left, arr);
  arr.push(root.val);
  treeDp(root.right, arr);
}
// @lc code=end
