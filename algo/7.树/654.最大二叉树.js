/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  const buildTree = (arr) => {
    if (!arr || !arr.length) return null;
    let maxNum = Math.max(...arr);
    let index = arr.indexOf(maxNum);
    return new TreeNode(
      maxNum,
      buildTree(arr.slice(0, index)),
      buildTree(arr.slice(index + 1))
    );
  };
  return buildTree(nums);
};
// @lc code=end
