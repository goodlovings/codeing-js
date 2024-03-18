/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
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
var averageOfLevels = function (root) {
  if (!root) return [];
  let res = [],
    stack = [root];
  while (stack.length) {
    let temp = [],
      len = stack.length,
      sum = 0;
    for (let i = 0; i < len; i++) {
      let node = stack.pop();
      sum += node.val;
      node.left && temp.push(node.left);
      node.right && temp.push(node.right);
    }
    res.push(parseFloat(sum / len).toFixed(5));
    stack = temp;
  }
  return res;
};
// @lc code=end
