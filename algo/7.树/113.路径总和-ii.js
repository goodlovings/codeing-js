/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
 * 给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。
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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  if (!root) return [];
  let res = [];
  const treeIteration = (node, sum, arr) => {
    let temp = arr.concat([node.val]);
    if (!node.left && !node.right) {
      if (sum + node.val === targetSum) {
        res.push(temp);
      }
    }
    if (node.left) {
      treeIteration(node.left, sum + node.val, temp);
    }
    if (node.right) {
      treeIteration(node.right, sum + node.val, temp);
    }
  };
  treeIteration(root, 0, []);
  return res;
};
// @lc code=end
