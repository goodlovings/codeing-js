/*
 * @lc app=leetcode.cn id=606 lang=javascript
 *
 * [606] 根据二叉树创建字符串
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
 * @return {string}
 */
var tree2str = function (root) {
  const treeDfs = (node) => {
    if (!node) return "()";
    let str = String(node.val);
    let l = treeDfs(node.left);
    let r = treeDfs(node.right);
    if (l == "()" && r == "()") {
      l = "";
      r = "";
    }
    if (r == "()") {
      r = "";
    }
    str = `(${str}${l}${r})`;
    return str;
  };
  let res = treeDfs(root);
  let len = res.length;
  return res.substring(1, len - 1);
};
// @lc code=end
