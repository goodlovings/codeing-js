/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  let res = [];
  if (!root) return res;
  const treeDf = (root, str) => {
    let temp = str + "->" + root.val;
    if (!root.left && !root.right) {
      res.push(temp.slice(2));
      return;
    }
    root.left && treeDf(root.left, temp);
    root.right && treeDf(root.right, temp);
  };
  treeDf(root, "");
  return res;
};
// @lc code=end
