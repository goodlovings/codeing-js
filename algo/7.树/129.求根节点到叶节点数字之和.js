/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根节点到叶节点数字之和
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
var sumNumbers = function (root) {
  let sum = 0;
  const treeDf = (root, preVal) => {
    if (!root.left && !root.right) {
      sum += Number(preVal + root.val);
    }
    root.left && treeDf(root.left, preVal + root.val);
    root.right && treeDf(root.right, preVal + root.val);
  };
  treeDf(root, "");
  return sum;
};
// @lc code=end
