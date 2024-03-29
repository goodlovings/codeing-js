/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
 * 给定一个二叉树，判断它是否是高度平衡的二叉树。
 * 本题中，一棵高度平衡二叉树定义为：一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。
 * 输入：root = [3,9,20,null,null,15,7]
 * 输出：true
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
 * @return {boolean}
 */
var isBalanced = function (root) {
  const treeDp = (root) => {
    if (!root) return 0;
    let leftRes = treeDp(root.left);
    if (leftRes < 0) return -1;
    let rightRes = treeDp(root.right);
    if (rightRes < 0) return -1;
    if (Math.abs(leftRes - rightRes) > 1) return -1;
    return Math.max(leftRes, rightRes) + 1;
  };
  let res = treeDp(root);
  return res >= 0;
};
// @lc code=end
