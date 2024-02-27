/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
 * 给你二叉树的根结点 root ，请你将它展开为一个单链表：
 * 展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。
 * 展开后的单链表应该与二叉树 先序遍历 顺序相同
 * 你可以使用原地算法（O(1) 额外空间）展开这棵树
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
// 方法一（略）：辅助栈存每个节点自身，然后拼接，空间复杂度O（n）；
// 使用原地算法（O(1) 额外空间）
var flatten = function (root) {
  const treeIteration = (node) => {
    if (!node) return;
    if (node.right) {
      treeIteration(node.right);
    }
    if (node.left) {
      treeIteration(node.left);
      let leftEnd = node.left;
      while (leftEnd.right) {
        leftEnd = leftEnd.right;
      }
      leftEnd.right = node.right;
      node.right = node.left;
      node.left = null;
    }
  };
  treeIteration(root);
};
// @lc code=end
